import React from 'react'; // Import React here
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
