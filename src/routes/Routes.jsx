import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFoundPage from "../pages/Error/NotFoundPage";
import MyCarts from "../components/MyCarts/MyCarts";
import AddProducts from "../components/Products/AddProducts";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../pages/Home/BrandProducts";
import Products from "../components/Products/Products";
import ProductDetails from "../components/Products/ProductDetails";
import UpdateProduct from "../components/Products/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("brand.json"),
      },

      {
        path: "/brand/product/:name",
        element: <BrandProducts></BrandProducts>,
      },

      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
        // loader: () => fetch('https://info-tech-server-app.vercel.app/products'),
      },

      {
        path: "/allProducts",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },

      {
        path: "/productsDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },

      
      {
        path: "/productUpdate/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },


      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCarts></MyCarts>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/product/cart"),
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
