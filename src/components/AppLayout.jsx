import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="font-barlow">
      <Header />
      <Outlet />

      <Sidebar />
    </div>
  );
}

export default AppLayout;
