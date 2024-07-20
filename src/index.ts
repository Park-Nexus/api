import express from "express";
import cors from "cors";
import { trpcMiddleware } from "./trpc/trpc.middleware";
import morgan from "morgan";
import { apiConfig } from "./configs/api.config";
import { trpcRouter } from "./trpc/trpc.router";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(trpcMiddleware);

app.listen(apiConfig.port, () => {
  console.log("Server is running on port", apiConfig.port);
});

export type TrpcRouter = typeof trpcRouter;
