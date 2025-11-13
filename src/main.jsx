import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { router } from "./Routers.jsx";
import { RouterProvider } from "react-router/dom";
import AuthProvider from "./Authentication/AuthProvider.jsx";

import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
