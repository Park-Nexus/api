import express from "express";
import cors from "cors";
import { trpcMiddleware } from "./trpc/trpc.middleware";
import morgan from "morgan";
import { apiConfig } from "./configs/api.config";
import dotenv from "dotenv";
import { uploadRouter } from "./upload";
import cron from "node-cron";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use("/trpc", trpcMiddleware);
app.use("/upload", uploadRouter);

app.listen(apiConfig.port, () => {
  console.log("Server is running on port", apiConfig.port);
});

setInterval(() => {
  console.log(cron.getTasks());
}, 5000);
