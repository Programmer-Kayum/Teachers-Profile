import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import Resume from "../components/Resume/Resume";
import AllPublication from "../components/AllPublication/AllPublication";
import StudentCorner from "../components/StudentCorner/StudentCorner";
import Tools from "../components/Tools/Tools";
import Dashboard from "../components/Dashboard/Dashboard";
import Courses from "../components/StudentCorner/Courses/Courses";
import AddPublication from "../components/Dashboard/AddPublication/AddPublication";
import AddExamResult from "../components/Dashboard/AddExamResult/AddExamResult";
import AddClassPdf from "../components/Dashboard/AddClassPdf/AddClassPdf";

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
      {
        path: "/pdfs/:batchYear", // Correct dynamic parameter syntax
        element: <Courses />,
      },
      {
        path: "/uploadPublication",
        element: <AddPublication></AddPublication>,
      },
      {
        path: "/uploadResult",
        element: <AddExamResult></AddExamResult>,
      },
      {
        path: "/uploadPdf",
        element: <AddClassPdf></AddClassPdf>,
      },
    ],
  },
]);
