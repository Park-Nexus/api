import { trpcInstance } from "../../trpc";
import * as analytics from "./index.analytics";

export const analyticsRoute = trpcInstance.router({
  get: {
    dailyRevenue: analytics.getDailyRevenue,
    topParkingLotsByRevenue: analytics.topParkingLotsByRevenue,
    revenueContributionByVehicleType: analytics.revenueContributionByVehicleType,
    parkingSpotUtilizationByWeekDay: analytics.parkingSpotUtilizationByWeekDay,
    getDataByPlace: analytics.getDataByPlace,
  },
});
