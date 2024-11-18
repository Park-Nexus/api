import { authMiddleware } from "../../auth";
import { procedure } from "../../trpc";
import * as MetricsUtils from "../../utils/metrics";

const HOURS = 12;

export const getCloudRunApiCpuUtilizations = procedure
  .use(authMiddleware(["ADMIN"]))
  .query(async () => {
    return MetricsUtils.getCloudRunApiCpuUtilizations(HOURS);
  });

export const getCloudRunApiMemoryUtilizations = procedure
  .use(authMiddleware(["ADMIN"]))
  .query(async () => {
    return MetricsUtils.getCloudRunApiMemoryUtilizations(HOURS);
  });

export const getCloudSqlCpuUtilizations = procedure
  .use(authMiddleware(["ADMIN"]))
  .query(async () => {
    return MetricsUtils.getCloudSqlCpuUtilizations(HOURS);
  });

export const getCloudSqlDataIo = procedure.use(authMiddleware(["ADMIN"])).query(async () => {
  return MetricsUtils.getCloudSqlDataIo(HOURS);
});

export const getCloudSqlStorageUsage = procedure.use(authMiddleware(["ADMIN"])).query(async () => {
  return MetricsUtils.getCloudSqlStorageUsage(HOURS);
});
