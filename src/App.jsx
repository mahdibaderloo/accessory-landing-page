import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Cart from "./features/cart/Cart";
import LoginPage from "./features/user/LoginPage";
import Order from "./features/order/Order";
import Products from "./features/products/Products";
import Product from "./features/products/Product";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
        {
          path: "/Products/:productId",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
