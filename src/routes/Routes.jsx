import {createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import HomePage from "../pages/HomePage";
import SignUp from "../components/Authentication/signUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <HomePage></HomePage>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);