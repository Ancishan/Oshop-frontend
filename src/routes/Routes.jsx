import {createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <HomePage></HomePage>
        }
      ]
    },
  ]);