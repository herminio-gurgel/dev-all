import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";
import "bulma/css/bulma.min.css";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
