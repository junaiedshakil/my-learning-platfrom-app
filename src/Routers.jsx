

import { createBrowserRouter } from "react-router";
import Roots from "./Roots";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ViewAll from "./Pages/ViewAll";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    children:[
      {
        index:true,
        loader:()=>fetch('http://localhost:3000/latest_learning'),
        path:"/",
        Component:Home
      },
      {
        path:"/viewall",
        loader:()=>fetch('http://localhost:3000/learning'),
        Component:ViewAll
      },
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