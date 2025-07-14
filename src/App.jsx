import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home, { loader as homeProductsLoader } from "./components/Home";
import Cart from "./features/pages/Cart";
import LoginPage from "./features/pages/LoginPage";
import Order from "./features/pages/Order";
import Products, { loader as productsLoader } from "./features/pages/Products";
import Product, { loader as productLoader } from "./features/pages/Product";
import Signup from "./features/pages/Signup";
import { Provider } from "react-redux";
import store from "../store";
import Profile from "./features/pages/Profile";
import ProfileForm from "./features/profile/ProfileForm";
import ProfileOrders from "./features/profile/ProfileOrders";
import ProfileFavorites from "./features/profile/ProfileFavorites";
import Notifications from "./features/profile/Notifications";
import ContactUs from "./features/pages/ContactUs";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: homeProductsLoader,
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
          loader: productsLoader,
        },
        {
          path: "/Product/:productId",
          element: <Product />,
          loader: productLoader,
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
      <Toaster
        position="top-center"
        gutter={10}
        containerStyle={{ borderRadius: "10px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 4000 },
          style: {
            fontSize: "16px",
          },
        }}
      />
    </Provider>
  );
}

export default App;
