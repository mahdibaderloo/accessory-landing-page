import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Cart from "./features/pages/Cart";
import LoginPage from "./features/pages/LoginPage";
import Order from "./features/pages/Order";
import Products, { loader as ProductsLoader } from "./features/pages/Products";
import Product from "./features/pages/Product";
import Signup from "./features/pages/Signup";
import { Provider } from "react-redux";
import store from "../store";
import Profile from "./features/pages/Profile";
import ProfileForm from "./features/profile/ProfileForm";
import ProfileOrders from "./features/profile/ProfileOrders";
import ProfileFavorites from "./features/profile/ProfileFavorites";
import Notifications from "./features/profile/Notifications";
import ContactUs from "./features/pages/ContactUs";

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
          path: "/order",
          element: <Order />,
        },
        {
          path: "/Products",
          element: <Products />,
          loader: ProductsLoader,
        },
        {
          path: "/Products/:productId",
          element: <Product />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/profile",
          element: <Profile />,
          children: [
            {
              path: "/profile",
              element: <ProfileForm />,
            },
            {
              path: "/profile/orders",
              element: <ProfileOrders />,
            },
            {
              path: "/profile/favorites",
              element: <ProfileFavorites />,
            },
            {
              path: "/profile/notifications",
              element: <Notifications />,
            },
          ],
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
