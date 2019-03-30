import React from "react";
import { hydrate, render } from "react-dom";
import { getQueryParam } from './utils/common';
import "./index.module.scss";
import App from "./components/App";
import "./fonts.css";

const isDebug = !!getQueryParam('debug');

const rootElement = document.getElementById("root");
if (!isDebug && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
