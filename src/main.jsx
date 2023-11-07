import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./Providers/AuthProvider";
import "./index.css";
import router from "./Routes/index";
import { Toaster } from "react-hot-toast";

import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);
