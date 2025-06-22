import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./Loader";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <div className="font-barlow desktop:max-w-[1536px] desktop:mx-auto overflow-x-hidden">
        <Header />
        <Sidebar />

        {isLoading && <Loader />}

        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
