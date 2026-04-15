import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";


import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";
import Timeline from "../pages/timeline/Timeline";
import Status from "../pages/status/Status";
import FriendDetails from "../pages/friendDetails/FriendDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "status",
        element: <Status />,
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />
      }
    ],

    errorElement: <ErrorPage />

  },
]);