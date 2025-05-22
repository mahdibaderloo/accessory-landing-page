import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="font-barlow">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
