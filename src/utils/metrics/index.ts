import { MetricServiceClient } from "@google-cloud/monitoring";
import path from "path";

export const metricClient = new MetricServiceClient({
  keyFilename: path.join(__dirname, "../../../gc-metrics-key.json"),
});
