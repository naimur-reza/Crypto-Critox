import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import BuyCrypto from "../pages/Buy-Crypto/BuyCrypto";
import SellCrypto from "../pages/Sell-Crypto/SellCrypto";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/Signup";
import NotFound from "../components/Common/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buy-crypto",
        element: <BuyCrypto />,
      },
      {
        path: "/sell-crypto",
        element: <SellCrypto />,
      },
      {
        path: "/news-article",
        element: <SellCrypto />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
