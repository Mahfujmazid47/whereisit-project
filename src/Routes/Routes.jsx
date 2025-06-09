import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Shared/ErrorPage";
import AddItems from "../Pages/AddItems/AddItems";
import MyItems from "../Pages/MyItems/MyItems";
import AllRecovered from "../Pages/AllRecovered/AllRecovered";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/addItems",
        element: (
          <PrivateRoutes>
            <AddItems />
          </PrivateRoutes>
        )
      },
      {
        path: "/myItems",
        element: (
          <PrivateRoutes>
            <MyItems />
          </PrivateRoutes>
        )
      },
      {
        path: "/allRecovered",
        element: (
          <PrivateRoutes>
            <AllRecovered />
          </PrivateRoutes>
        )
      },
    ]
  },
  {
    path: "/*",
    Component: ErrorPage
  }
]);

