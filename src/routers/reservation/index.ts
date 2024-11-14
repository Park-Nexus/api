import { trpcInstance } from "../../trpc";
import * as ticket from "./index.ticket";

export const reservationRouter = trpcInstance.router({
  ticket: {
    create: ticket.create,
    get: {
      many: ticket.getMany,
      single: ticket.getSingle,
      shouldUpdate: { single: ticket.getSingleSubscribe },
    },
  },
});
