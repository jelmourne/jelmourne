import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./pages";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <Index></Index>
  </React.StrictMode>
);
