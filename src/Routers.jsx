import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ViewAll from "./Pages/ViewAll";
import CourseDetails from "./Pages/CourseDetails";
import AddCourse from "./Pages/AddCourse";
import MyCourse from "./Pages/MyCourse";
import MyEnroll from "./Pages/MyEnroll";
import UpdateCourse from "./Pages/UpdateCourse";
import Private from "./Authentication/Private";
import Error404 from "./Pages/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://eduhubserver.vercel.app/latest_learning").then((res) =>
            res.json()
          ),
        element: <Home />,
      },
      {
        path: "/viewall",
        loader: () =>
          fetch("https://eduhubserver.vercel.app/learning").then((res) =>
            res.json()
          ),
        element: <ViewAll />,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`https://eduhubserver.vercel.app/learning/${params.id}`).then(
            (res) => res.json()
          ),
        element: (
          <Private>
            <CourseDetails />
          </Private>
        ),
      },
      {
        path: "/addcourse",
        element: <AddCourse />,
      },
      {
        path: "/mycourse",
        element: <MyCourse />,
      },
      {
        path: "/myenroll",
        element: <MyEnroll />,
      },
      {
        path: "/updatecourse/:id",
        loader: ({ params }) =>
          fetch(`https://eduhubserver.vercel.app/learning/${params.id}`).then(
            (res) => res.json()
          ),
        element: <UpdateCourse />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
