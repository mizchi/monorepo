import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../styled-system/styles.css";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
