import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="font-barlow desktop:max-w-[1536px] desktop:mx-auto overflow-x-hidden">
      <Header />
      {isLoading && <Loader />}

      <Outlet />

      <Sidebar />
    </div>
  );
}

export default AppLayout;
