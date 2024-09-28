import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Header } from "./components/header/index.jsx";
import ErrorBoundary from "./components/error-boundary/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Header />

      <App />
  </StrictMode>
);
