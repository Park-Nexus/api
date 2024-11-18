import { trpcInstance } from "../../trpc";
import * as metrics from "./index.metrics";

export const metricsRouter = trpcInstance.router({
  get: {
    cloudRunApiCpuUtilizations: metrics.getCloudRunApiCpuUtilizations,
    cloudRunApiMemoryUtilizations: metrics.getCloudRunApiMemoryUtilizations,
    cloudSqlCpuUtilizations: metrics.getCloudSqlCpuUtilizations,
    cloudSqlDataIo: metrics.getCloudSqlDataIo,
    cloudSqlStorageUsage: metrics.getCloudSqlStorageUsage,
  },
});
