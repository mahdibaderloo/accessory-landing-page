import { Outlet, useNavigate } from "react-router-dom";

import ProfileSidebar from "../profile/ProfileSidebar";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useAuth from "../../components/useAuth";

function Profile() {
  const { isLoading } = useAuth();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.profile.isAuthenticated);

  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) {
        toast.error("Please login first");
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <Loader />;

  return (
    <div className="w-full laptop:h-[90vh] flex flex-col laptop:flex-row mt-12 laptop:mt-16 bg-zinc-100 laptop:rounded-4xl overflow-hidden">
      <ProfileSidebar />
      <Outlet />
    </div>
  );
}

export default Profile;
