import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Global, css } from "@emotion/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
  </>
);
