import { Outlet, useNavigate } from "react-router-dom";
import { setUser } from "../profile/profileSlice";

import ProfileSidebar from "../profile/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.profile.user);

  useEffect(
    function () {
      const savedUser = JSON.parse(
        localStorage.getItem("sb-ywipdwyvwyrqejrfdahl-auth-token")
      );

      if (savedUser) {
        dispatch(setUser(savedUser));
      }
    },
    [dispatch]
  );

  useEffect(
    function () {
      if (!user || user.length < 1) {
        toast.error("Please login first");
        navigate("/login");
      }
    },
    [user, navigate]
  );

  if (!user || !user.length < 1) return <Loader />;

  return (
    <div className="w-full laptop:h-[90vh] flex flex-col laptop:flex-row mt-12 laptop:mt-16 bg-zinc-100 laptop:rounded-4xl overflow-hidden">
      <ProfileSidebar />
      <Outlet />
    </div>
  );
}

export default Profile;
