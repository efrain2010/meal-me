import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import dotenv from "dotenv";
import { App } from "./App";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

app.use("/", (_, res) => {
  const appString = ReactDOMServer.renderToString(<App />);

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React App</title>
    </head>
    <body>
        <div id="root">${appString}</div>
        <script src="/bundle.js"></script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
