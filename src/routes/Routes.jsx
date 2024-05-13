import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import JobDetails from "../pages/JobDetails";
import Blog from "../pages/Blog";
import AllJobs from "../pages/AllJobs";
import AllJobsDetails from "../pages/AllJobsDetails";
import AddJob from "../pages/AddJob";
import MyJobs from "../pages/MyJobs";
import AppliedJobs from "../pages/AppliedJobs";
import ErrorPage from "../pages/ErrorPage";
import UpdateMyJobs from "../pages/UpdateMyJobs";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/jobDetails",
        element: <JobDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/allJobs",
        element: <AllJobs />,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <AllJobsDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/addJobs",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateMyJobs />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
    ],
  },
]);

export default router;
