import "../styled-system/styles.css";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);