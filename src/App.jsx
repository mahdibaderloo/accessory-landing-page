import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Cart from "./features/pages/Cart";
import LoginPage from "./features/pages/LoginPage";
import Order from "./features/order/Order";
import Products from "./features/pages/Products";
import Product from "./features/pages/Product";
import Signup from "./features/pages/Signup";
import { Provider } from "react-redux";
import store from "../store";

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
          path: "/signup",
          element: <Signup />,
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

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
