import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import JobDetails from "../pages/JobDetails";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Registration/>
      }
      ,
      {
        path: '/jobDetails',
        element: <JobDetails/>
      }
      ,
      {
        path: '/blog',
        element: <Blog/>
      }
    ],
  },
]);

export default router;
