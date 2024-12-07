import { z } from "zod";
import dayjs from "dayjs";
import { procedure } from "../../trpc";
import { authMiddleware } from "../../auth";
import { prisma, RESERVATION__STATUS_ALIAS } from "../../db";
import { TRPCError } from "@trpc/server";
import { DateUtils } from "../../utils/date";
import {
  EXPIRATION_TIME_IN_HOURS,
  MAX_AHEAD_TIME_ALLOWED_IN_HOURS,
  MAX_ALLOWED_RESERVATIONS,
  MAXIMUM_OVERSTAYING_DURATION_IN_HOURS,
  MINIMUM_DURATION_IN_HOURS,
} from "../../../rules";
import { getFileSignedUrl } from "../../utils/storage";
import { StripeUtils } from "../../utils/stripe";
import { EventNameFn, EventEmitter } from "../../utils/sse";
import { on } from "events";
import cron from "node-cron";
import { OneSignalUtils } from "../../utils/oneSignal";

// Create a new ticket ------------------------------------------------------------------------------
const createSchema = z.object({
  parkingLotId: z.number(),
  serviceIds: z.array(z.number()),
  vehicleId: z.number(),
  startTime: z.string(),
  endTime: z.string(),
});
export const create = procedure
  .use(authMiddleware(["USER"]))
  .input(createSchema)
  .mutation(async ({ ctx, input }) => {
    const { startTime, endTime, parkingLotId, serviceIds, vehicleId } = input;
    const {
      account: { id: accountId },
    } = ctx;

    // check if user exists
    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

    // check if user has reached maximum allowed reservations
    const currentReservations = await prisma.reservation.findMany({
      where: { vehicle: { ownerId: user.id }, status: "PENDING" },
    });
    if (currentReservations.length > MAX_ALLOWED_RESERVATIONS) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `You can only have ${MAX_ALLOWED_RESERVATIONS} reservations`,
      });
    }

    // check if date time is in the future, and less than 48 hours
    const now = dayjs();
    const startTimeObj = dayjs(startTime);
    const endTimeObj = dayjs(endTime);
    if (startTimeObj.isBefore(now)) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Start time must be in the future" });
    }
    if (startTimeObj.diff(now, "hours") > MAX_AHEAD_TIME_ALLOWED_IN_HOURS) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Start time must be less than ${MAX_AHEAD_TIME_ALLOWED_IN_HOURS} hours from now`,
      });
    }
    if (endTimeObj.diff(startTimeObj, "hours") < MINIMUM_DURATION_IN_HOURS) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Parking must be at least ${MINIMUM_DURATION_IN_HOURS} hours`,
      });
    }

    // check if parking lot exists, check if owned by user
    const parkingLot = await prisma.parkingLot.findUnique({ where: { id: parkingLotId } });
    if (!parkingLot) throw new TRPCError({ code: "NOT_FOUND", message: "Parking lot not found" });
    if (parkingLot.ownerId === user.id) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You cannot reserve your own parking lot",
      });
    }

    // check if services exist
    const services = await prisma.parkingLotService.findMany({
      where: { parkingLotId, id: { in: serviceIds } },
    });
    if (services.length !== serviceIds.length) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "One or more services not found",
      });
    }

    // find vehicle, check if owned by user
    const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
    if (!vehicle) throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" });
    if (vehicle.ownerId !== user.id) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Vehicle not owned by user" });
    }

    // check if parking spot is available
    const availableParkingSpot = await prisma.parkingSpot.findFirst({
      where: {
        parkingLotId,
        vehicleType: vehicle.type,
      },
    });
    if (!availableParkingSpot) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "No available parking spot" });
    }

    // calc price
    let totalPrice = 0;
    services.forEach((service) => {
      totalPrice += service.price;
    });
    const parkingDuration = endTimeObj.diff(startTimeObj, "hours");
    const parkingLotPrice = await prisma.parkingLotPrice.findFirst({
      where: { parkingLotId, vehicleType: vehicle.type },
    });
    if (!parkingLotPrice) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Parking lot price not found" });
    }
    totalPrice = totalPrice + parkingDuration * parkingLotPrice.price;

    // create reservation
    const newReservation = await prisma.reservation.create({
      data: {
        startTime: startTimeObj.toDate(),
        endTime: endTimeObj.toDate(),
        userId: user.id,
        parkingSpotId: availableParkingSpot.id,
        vehicleId: vehicle.id,
        services: {
          connect: services.map((service) => ({ id: service.id })),
        },
      },
    });

    // create payment record
    await prisma.paymentRecord.create({
      data: {
        reservationId: newReservation.id,
        userId: user.id,
        amountInUsd: totalPrice,
      },
    });

    const expiredAtObj = startTimeObj.add(EXPIRATION_TIME_IN_HOURS, "hours").toDate();
    const job = cron.schedule(DateUtils.toCronDate(expiredAtObj), async () => {
      const reservation = await prisma.reservation.findUnique({
        where: { id: newReservation.id },
        include: { paymentRecord: true },
      });
      const paymentRecord = reservation?.paymentRecord;

      if (reservation?.status === "PENDING") {
        await prisma.reservation.update({
          where: { id: newReservation.id },
          data: { status: "EXPIRED" },
        });

        if (paymentRecord?.status === "PAID" && !!paymentRecord?.stripeIntentId) {
          const intent = await StripeUtils.retrieveIntent({
            intentId: reservation.paymentRecord.stripeIntentId,
          });
          if (intent.status === "succeeded")
            await StripeUtils.refundIntent({ intentId: intent.id });
          await prisma.paymentRecord.update({
            where: { id: reservation.paymentRecord.id },
            data: { status: "REFUNDED", stripeIntentId: "" },
          });
        }

        console.log(`Reservation ${newReservation.id} expired, refunded!`);
        // will setup notification here
      }
      job.stop();
    });

    return { ticketId: newReservation.id };
  });

// Get many tickets ---------------------------------------------------------------------------
const getManySchema = z.object({
  isMine: z.boolean().optional(),
  parkingLotId: z.number().optional(),

  filter: z
    .object({
      status: z.nativeEnum(RESERVATION__STATUS_ALIAS).optional(),
    })
    .optional(),
});
export const getMany = procedure
  .use(authMiddleware())
  .input(getManySchema)
  .query(async ({ input, ctx }) => {
    const {
      isMine,
      parkingLotId,
      filter: { status },
    } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new Error("User not found");

    const reservations = await prisma.reservation.findMany({
      where: isMine
        ? { userId: user.id, status: status }
        : { parkingSpot: { parkingLot: { id: parkingLotId, ownerId: user.id } }, status: status },
      include: {
        paymentRecord: {
          select: { status: true },
        },
        parkingSpot: {
          include: { parkingLot: { select: { name: true, latitude: true, longitude: true } } },
        },
        vehicle: { select: { type: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return reservations;
  });

// Get single ticket ---------------------------------------------------------------------------
const getSingleSchema = z.object({
  id: z.number().optional(),
  code: z.string().optional(),
});
export const getSingleSubscribe = procedure.input(getSingleSchema).subscription(async function* ({
  signal,
  input,
}) {
  // eslint-disable-next-line no-empty-pattern
  for await (const [] of on(EventEmitter.getInstance(), EventNameFn.getSingleTicket(input.id), {
    signal,
  })) {
    yield "update";
  }
});
export const getSingle = procedure
  .use(authMiddleware())
  .input(getSingleSchema)
  .query(async ({ input, ctx }) => {
    const { id, code } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new Error("User not found");

    if (!id && !code) throw new TRPCError({ code: "BAD_REQUEST", message: "Missing id or code" });

    const reservation = await prisma.reservation.findFirst({
      where: {
        OR: [
          { OR: [{ id: id }, { code: code }], userId: user.id },
          { OR: [{ id: id }, { code: code }], parkingSpot: { parkingLot: { ownerId: user.id } } },
        ],
      },
      include: {
        paymentRecord: true,
        parkingSpot: { include: { parkingLot: true } },
        vehicle: true,
        services: true,
      },
    });
    if (!reservation) throw new TRPCError({ code: "NOT_FOUND", message: "Reservation not found" });

    if (!!reservation.vehicle.imageUrl && reservation.vehicle.imageUrl !== "") {
      const signedUrl = await getFileSignedUrl({ path: reservation.vehicle.imageUrl });
      reservation.vehicle.imageUrl = signedUrl;
    }

    return reservation;
  });

// Cancel ticket --------------------------------------------------------------------------
const cancelSchema = z.object({
  id: z.number(),
});
export const cancel = procedure
  .use(authMiddleware())
  .input(cancelSchema)
  .mutation(async ({ input, ctx }) => {
    const { id } = input;
    const { account } = ctx;

    const reservation = await prisma.reservation.findUnique({
      where: { id, user: { accountId: account.id } },
    });
    if (!reservation) throw new TRPCError({ code: "NOT_FOUND", message: "Reservation not found" });
    if (reservation.status !== "PENDING") {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Reservation is not pending" });
    }

    // refund payment
    const refund = async () => {
      const paymentRecord = await prisma.paymentRecord.findUnique({
        where: { reservationId: id, status: "PAID" },
      });
      if (paymentRecord) {
        const intent = await StripeUtils.retrieveIntent({ intentId: paymentRecord.stripeIntentId });
        try {
          await StripeUtils.refundIntent({ intentId: intent.id });
          await OneSignalUtils.sendExternalIdNotification({
            externalId: account.id,
            type: "PAYMENT",
            content: `Your reservation has been cancelled, ${intent.amount / 100} USD refund has been issued`,
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    refund();

    // update cancel status
    await prisma.reservation.update({
      where: { id },
      data: {
        status: "CANCELLED",
      },
    });

    // push update event to client
    EventEmitter.getInstance().emit(EventNameFn.getSingleTicket(id));
  });

// Check-In -------------------------------------------------------------------------------
const checkInSchema = z.object({
  ticketCode: z.string(),
});
export const checkIn = procedure
  .use(authMiddleware())
  .input(checkInSchema)
  .mutation(async ({ input, ctx }) => {
    const { ticketCode } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new Error("User not found");

    const reservation = await prisma.reservation.findFirst({
      where: { code: ticketCode, parkingSpot: { parkingLot: { ownerId: user.id } } },
      include: {
        paymentRecord: { select: { status: true, user: { select: { accountId: true } } } },
      },
    });
    if (!reservation) throw new TRPCError({ code: "NOT_FOUND", message: "Reservation not found" });
    if (reservation.status !== "PENDING") {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Reservation is not pending" });
    }
    if (reservation.paymentRecord.status !== "PAID") {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Reservation is not paid" });
    }

    await prisma.reservation.update({
      where: { id: reservation.id },
      data: { status: "ON_GOING" },
    });

    await prisma.parkingSpot.update({
      where: { id: reservation.parkingSpotId },
      data: { isAvailable: false },
    });

    await OneSignalUtils.sendExternalIdNotification({
      externalId: reservation.paymentRecord.user.accountId,
      type: "CHECK-IN",
      content: `Your reservation has been checked in, please check out before ${dayjs(reservation.endTime).format("HH:mm mmm DD, YYYY")} to avoid additional charges!`,
    });

    EventEmitter.getInstance().emit(EventNameFn.getSingleTicket(reservation.id));

    const markAsOverstayedAt = dayjs(reservation.endTime).add(10, "minutes").toDate();
    const markAsOverstayedJob = cron.schedule(
      DateUtils.toCronDate(markAsOverstayedAt),
      async () => {
        await prisma.reservation.update({
          where: { id: reservation.id },
          data: { status: "OVERSTAYED" },
        });
        await OneSignalUtils.sendExternalIdNotification({
          externalId: reservation.paymentRecord.user.accountId,
          type: "CHECK-OUT",
          content: "You have overstayed your reservation, please check out as soon as possible",
        });
        markAsOverstayedJob.stop();
      },
    );

    const autoCheckoutAt = dayjs(reservation.endTime)
      .add(MAXIMUM_OVERSTAYING_DURATION_IN_HOURS, "hours")
      .toDate();
    const autoCheckoutJob = cron.schedule(DateUtils.toCronDate(autoCheckoutAt), async () => {
      await prisma.reservation.update({
        where: { id: reservation.id },
        data: { status: "COMPLETED" },
      });
      await prisma.parkingSpot.update({
        where: { id: reservation.parkingSpotId },
        data: { isAvailable: true },
      });
      await OneSignalUtils.sendExternalIdNotification({
        externalId: reservation.paymentRecord.user.accountId,
        type: "CHECK-OUT",
        content: `Your reservation has been automatically checked out after ${MAXIMUM_OVERSTAYING_DURATION_IN_HOURS} hours, please contact the parking lot owner for further information`,
      });
      autoCheckoutJob.stop();
    });
  });

// Check Out -------------------------------------------------------------------------------
const checkOutSchema = z.object({
  ticketCode: z.string(),
});
export const checkOut = procedure
  .use(authMiddleware())
  .input(checkOutSchema)
  .mutation(async ({ input, ctx }) => {
    const { ticketCode } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new Error("User not found");

    const reservation = await prisma.reservation.findFirst({
      where: { code: ticketCode, parkingSpot: { parkingLot: { ownerId: user.id } } },
      include: { paymentRecord: { select: { status: true } } },
    });
    if (!reservation) throw new TRPCError({ code: "NOT_FOUND", message: "Reservation not found" });
    if (reservation.status !== "ON_GOING" && reservation.status !== "OVERSTAYED") {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Reservation is not on going" });
    }

    await prisma.reservation.update({
      where: { id: reservation.id },
      data: { status: "COMPLETED" },
    });
    EventEmitter.getInstance().emit(EventNameFn.getSingleTicket(reservation.id));
    await prisma.parkingSpot.update({
      where: { id: reservation.parkingSpotId },
      data: { isAvailable: true },
    });
  });
