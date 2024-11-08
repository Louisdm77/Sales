import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ViewContextProvider from "./assets/Context/viewContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ViewContextProvider>
        <App />
      </ViewContextProvider>
    </BrowserRouter>
  </StrictMode>
);
