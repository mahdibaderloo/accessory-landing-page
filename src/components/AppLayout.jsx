import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="font-barlow desktop:max-w-[1536px] desktop:mx-auto overflow-x-hidden">
      <Header />
      <Outlet />

      <Sidebar />
    </div>
  );
}

export default AppLayout;
