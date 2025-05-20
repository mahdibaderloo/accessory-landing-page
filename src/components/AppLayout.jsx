import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="font-barlow">
      <Outlet />
    </div>
  );
}

export default AppLayout;
