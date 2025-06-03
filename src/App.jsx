import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Cart from "./features/pages/Cart";
import LoginPage from "./features/pages/LoginPage";
import Order from "./features/pages/Order";
import Products from "./features/pages/Products";
import Product from "./features/pages/Product";
import Signup from "./features/pages/Signup";
import { Provider } from "react-redux";
import store from "../store";
import Profile from "./features/pages/Profile";

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
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/cart",
          element: <Cart />,
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
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
