import { Outlet } from "react-router-dom";
import ProfileSidebar from "../profile/ProfileSidebar";

function Profile() {
  return (
    <div className="w-full laptop:h-[90vh] flex flex-col laptop:flex-row mt-12 laptop:mt-16 bg-zinc-100 laptop:rounded-4xl overflow-hidden">
      <ProfileSidebar />
      <Outlet />
    </div>
  );
}

export default Profile;
