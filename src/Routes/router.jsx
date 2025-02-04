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
import AddBatchItem from "../components/Dashboard/AddBatchItem/AddBatchItem";
import Update from "../components/StudentCorner/Update/Update";
import CareLab from "../components/CareLab/CareLab";
import AddResearcher from "../components/Dashboard/AddResearcher/AddResearcher";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
      {
        path: "/addBatch",
        element: <AddBatchItem></AddBatchItem>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/batches/${params.id}`),
      },
      {
        path: "/careLab",
        element: <CareLab></CareLab>,
      },
      {
        path: "/addResearcher",
        element: <AddResearcher></AddResearcher>,
      },
    ],
  },
]);
