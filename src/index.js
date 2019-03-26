import React from "react";
import { hydrate, render } from "react-dom";
import "./index.module.scss";
import App from "./components/App";
import "./fonts.css";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
