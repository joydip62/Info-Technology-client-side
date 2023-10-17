import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFoundPage from "../pages/Error/NotFoundPage";
import MyCarts from "../components/MyCarts/MyCarts";
import AddProducts from "../components/Products/AddProducts";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },

      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCarts></MyCarts>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
