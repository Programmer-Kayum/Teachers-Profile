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
import SignInPage from "../Security/SignIn/SignIn";
import SignupPage from "../Security/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Results from "../components/StudentCorner/Results/Results";
import Assignment from "../components/StudentCorner/Assignment/Assignment";
import AddAssignment from "../components/Dashboard/AddAssignment/AddAssignment";
import Notice from "../components/StudentCorner/NoticeBoard/Notice";
import AddUserForm from "../components/Dashboard/AddUsers/AddUsers";

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
        path: "/pdfs/:batchYear/:courseCode", // Correct dynamic parameter syntax
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
      },
      {
        path: "/result/:batchYear/:courseCode",
        element: (
          <PrivateRoute>
            <Results></Results>
          </PrivateRoute>
        ),
      },
      {
        path: "/assignment/:batchYear/:courseCode",
        element: (
          <PrivateRoute>
            <Assignment></Assignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/assignment",
        element: <AddAssignment></AddAssignment>,
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
          fetch(`https://mahfuj-sir.vercel.app/batches/${params.id}`),
      },
      {
        path: "/careLab",
        element: <CareLab></CareLab>,
      },
      {
        path: "/addResearcher",
        element: <AddResearcher></AddResearcher>,
      },
      {
        path: "/signin",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/signup",
        element: <SignupPage></SignupPage>,
      },
      {
        path: "/notice",
        element: <Notice></Notice>,
      },
      {
        path: "/addusers",
        element: <AddUserForm></AddUserForm>,
      },
    ],
  },
]);
