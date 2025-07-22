import { Outlet, useNavigate } from "react-router-dom";

import ProfileSidebar from "../profile/ProfileSidebar";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";

function Profile() {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.profile.isAuthenticated);

  useEffect(
    function () {
      if (!isAuthenticated) {
        toast.error("Please login first");
        navigate("/login");
      }
    },
    [isAuthenticated, navigate]
  );

  if (!isAuthenticated) return <Loader />;

  return (
    <div className="w-full laptop:h-[90vh] flex flex-col laptop:flex-row mt-12 laptop:mt-16 bg-zinc-100 laptop:rounded-4xl overflow-hidden">
      <ProfileSidebar />
      <Outlet />
    </div>
  );
}

export default Profile;
