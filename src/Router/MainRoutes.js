import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import SalesPage from "../components/Sales";
import SignIn from "../pages/SignIn";
import LeaderBoardPage from "../components/leaderboard/LeaderBoardPage";
import HomePage from "../components/Home/HomePage";
import Products from "../components/Product/Products";
import Settings from "../components/Settings/Settings";
import Dashboard from "../components/dashboard/Dashboard";
// import DataDisplay from "../components/DataDisplay";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
 
  {
    path: "/dashboard",
    element: <Dashboard />,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/dashboard/home",
        element: <HomePage />,
      },
      {
        path: "/dashboard/leaderboard",
        element: <LeaderBoardPage />,
      },
      {
        path: "/dashboard/products",
        element: <Products />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings/>,
      },
      
    ],
  },
 
]);
