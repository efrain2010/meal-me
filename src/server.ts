import express from "express";
import dotenv from "dotenv";
import { createServerMiddleware } from "./server/createServerMiddleware";
import path from "path";

dotenv.config();

const port = process.env.PORT || 3000;

const startServer = () => {
  const app = express();

  app.use(express.static(path.resolve(__dirname, "../")));

  app.use("*", createServerMiddleware);

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

startServer();
