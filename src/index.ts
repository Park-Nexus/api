import express from "express";
import cors from "cors";
import { trpcMiddleware } from "./trpc/trpc.middleware";
import morgan from "morgan";
import { apiConfig } from "./configs/api.config";
import dotenv from "dotenv";
import { uploadRouter } from "./upload";
import { metricClient } from "./utils/metrics";
import dayjs from "dayjs";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use("/trpc", trpcMiddleware);
app.use("/upload", uploadRouter);

// Replace with your Google Cloud project ID
const projectId = "parknexus-440604";

// Query the metric
async function getRequestCount() {
  const request = {
    name: `projects/${projectId}`,
    filter: `metric.type = "run.googleapis.com/request_count" AND
             resource.labels.service_name = "api" AND
             resource.labels.location = "asia-east1"`,
    interval: {
      startTime: {
        seconds: dayjs().subtract(1, "day").unix(),
      },
      endTime: {
        seconds: dayjs().unix(),
      },
    },
  };

  try {
    const [timeSeries] = await metricClient.listTimeSeries(request);
    console.log(JSON.stringify(timeSeries));
    // console.log("Request Count Metrics:");
    // timeSeries.forEach((data) => {
    //   console.log(`Metric: ${data.metric.type}`);
    //   console.log(`Resource: ${JSON.stringify(data.resource.labels)}`);
    //   data.points.forEach((point) => {
    //     console.log(`Timestamp: ${point.interval.endTime}`);
    //     console.log(`Value: ${point.value.int64Value}`);
    //   });
    // });
  } catch (err) {
    console.error("Error querying metrics:", err);
  }
}

// getRequestCount();

app.listen(apiConfig.port, () => {
  console.log("Server is running on port", apiConfig.port);
});
