import React from "react";
import { Request, Response } from "express";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { StaticRouter } from "react-router-dom/server";
import { App } from "../components/App";
import isValidProp from "@emotion/is-prop-valid";

export const createServerMiddleware = (req: Request, res: Response) => {
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
        <title>MealMe App</title>
        <link rel="stylesheet" type="text/css" href="/css/base.css" />
        <link rel="stylesheet" type="text/css" href="/css/styles.css" />
        ${styles}
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="text/javascript" src="/dist/client.js" async defer></script>
      </body>
    </html>
  `);
};
