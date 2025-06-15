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
import LostFoundItems from "../Pages/LostFoundItems/LostFoundItems";
import PostDetails from "../Pages/PostDetails/PostDetails";
import ContactDetails from "../Pages/ContactDetails/ContactDetails";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";
import UpdateItems from "../Pages/MyItems/UpdateItems";
import Loading from "../Shared/Loading";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/latestItems'),
        Component: Home,
        hydrateFallbackElement: <Loading />
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
        loader: () => fetch('http://localhost:3000/items'),
        element: (
          <PrivateRoutes>
            <MyItems />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading />
      },
      {
        path: "/allRecovered",
        loader: () => fetch('http://localhost:3000/recoveredItems'),
        element: (
          <PrivateRoutes>
            <AllRecovered />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading />
      },
      {
        path: "/items/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/items/${params.id}`),
        element: (
          <PrivateRoutes>
            <PostDetails></PostDetails>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading />
      },
      {
        path: "/allItems",
        loader: () => fetch('http://localhost:3000/items'),
        Component: LostFoundItems,
        hydrateFallbackElement: <Loading />
      },
      {
        path: '/contactDetails',
        Component: ContactDetails
      },
      {
        path: '/terms',
        Component: TermsConditions
      },
    ]
  },
  {
    path: "/*",
    Component: ErrorPage
  }
]);

