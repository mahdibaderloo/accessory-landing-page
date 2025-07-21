import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./Loader";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsAuthenticated, setUser } from "../features/profile/profileSlice";
import { fetchUser } from "../helpers/helper";

function AppLayout() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(
    function () {
      async function fetch() {
        const savedUser = JSON.parse(
          localStorage.getItem("sb-ywipdwyvwyrqejrfdahl-auth-token")
        );

        if (savedUser) {
          const userApi = await fetchUser(savedUser);
          dispatch(setUser(userApi));
          dispatch(setIsAuthenticated(true));
        }
      }
      fetch();
    },
    [dispatch]
  );

  const location = useLocation();
  const hideFooter = [
    /^\/profile$/,
    /^\/cart$/,
    /^\/contact-us$/,
    /^\/product(\/.*)?$/,
  ].some((pattern) => pattern.test(location.pathname));

  return (
    <>
      <div className="font-barlow desktop:max-w-[1536px] desktop:mx-auto overflow-x-hidden">
        <Header />
        <Sidebar />

        {isLoading ? <Loader /> : <Outlet />}
      </div>
      {isLoading || (!hideFooter && <Footer />)}
    </>
  );
}

export default AppLayout;
