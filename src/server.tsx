import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import dotenv from "dotenv";
import { App } from "./App";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const IS_DEV_MODE = process.env.NODE_ENV === "development";

app.use(express.static("./public/dist"));

app.use("/", (_, res) => {
  const appString = ReactDOMServer.renderToString(<App />);

  const hotReloadSubscriber = getEsBuildHotReload();

  res.send(`
    <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>React App</title>
      </head>
      <body>
          <div id="root">${appString}</div>
          <script src="/client.js"></script>
          ${hotReloadSubscriber}
      </body>
    </html>
  `);
});

const getEsBuildHotReload = () => {
  if (!IS_DEV_MODE) {
    return "";
  }

  return `<script type="text/event-stream">new EventSource('/esbuild').addEventListener('change', () => location.reload());</script>`;
};

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
