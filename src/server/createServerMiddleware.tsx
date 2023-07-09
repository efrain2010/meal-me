import React from "react";
import { Request, Response } from "express";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { StaticRouter } from "react-router-dom/server";
import { App } from "../components/App";
import isValidProp from "@emotion/is-prop-valid";

const IS_DEV_MODE = process.env.NODE_ENV === "development";

export const createServerMiddleware = (req: Request, res: Response) => {
  const hotReloadSubscriber = getEsBuildHotReload();

  const styleSheet = new ServerStyleSheet();

  let html, styles;

  try {
    html = renderToString(
      <StyleSheetManager sheet={styleSheet.instance} shouldForwardProp={isValidProp}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </StyleSheetManager>
    );
    styles = styleSheet.getStyleTags();
  } catch (error) {
    console.error(error);
  } finally {
    styleSheet.seal();
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React App</title>
        ${styles}
        <script type="text/javascript" src="/client.js" async defer></script>
        ${hotReloadSubscriber}
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
};

const getEsBuildHotReload = () => {
  if (!IS_DEV_MODE) {
    return "";
  }

  return `<script type="text/event-stream">new EventSource('/esbuild').addEventListener('change', () => location.reload());</script>`;
};
