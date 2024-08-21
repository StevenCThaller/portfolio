import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { ProvideAuth } from "./hooks/useAuth.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </BrowserRouter>
  </StrictMode>
);
