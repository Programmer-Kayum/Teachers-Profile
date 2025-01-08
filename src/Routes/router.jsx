import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import Resume from "../components/Resume/Resume";
import AllPublication from "../components/AllPublication/AllPublication";
import StudentCorner from "../components/StudentCorner/StudentCorner";
import Tools from "../components/Tools/Tools";
import Dashboard from "../components/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/publication",
        element: <AllPublication></AllPublication>,
      },
      {
        path: "/studentCorner",
        element: <StudentCorner></StudentCorner>,
      },
      {
        path: "/tools",
        element: <Tools></Tools>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
