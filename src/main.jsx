import React from 'react'; // Import React here
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
  
      <RouterProvider router={router} />
     
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
