import {createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import HomePage from "../pages/HomePage";
import SignUp from "../components/Authentication/signUp";
import SignIn from "../components/Authentication/signIn";


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
        },
        {
          path:'/login',
          element:<SignIn></SignIn>
        },
      ]
    },
  ]);