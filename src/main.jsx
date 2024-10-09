import {RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
        <RouterProvider router={router} />
  </AuthProvider>

  
)
