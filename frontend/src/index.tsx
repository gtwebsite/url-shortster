import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import { router } from "./router";
import "./index.css";

(async () => {
  ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
