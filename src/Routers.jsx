

import { createBrowserRouter } from "react-router";
import Roots from "./Roots";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    children:[
      {
        path:"/login",
        Component:Login
      },
      {
        path:"/register",
        Component:Register
      }
    ]

    
  }
]);