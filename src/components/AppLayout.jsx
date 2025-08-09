import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./Loader";
import Footer from "./Footer";
import useAuth from "./useAuth";
import Modal from "./Modal";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useAuth();

  const location = useLocation();
  const hideFooter = [
    /^\/profile(\/.*)?$/,
    /^\/cart$/,
    /^\/checkout$/,
    /^\/contact-us$/,
    /^\/product(\/.*)?$/,
    /^\/order(\/.*)?$/,
  ].some((pattern) => pattern.test(location.pathname));

  return (
    <>
      <Modal>hey</Modal>
      <div className="font-barlow desktop:max-w-[1536px] desktop:mx-auto overflow-x-hidden">
        {/* <Header /> */}
        <Sidebar />

        {isLoading ? <Loader /> : <Outlet />}
      </div>
      {isLoading || (!hideFooter && <Footer />)}
    </>
  );
}

export default AppLayout;
