import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
/* import { FirstApp } from "./firstApp"; */
/* import { HelloApp } from "./helloApp"; */
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={20} />
  </React.StrictMode>
);
