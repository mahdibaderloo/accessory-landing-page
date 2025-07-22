import { Outlet, useNavigate } from "react-router-dom";
import { setIsAuthenticated, setUser } from "../profile/profileSlice";

import ProfileSidebar from "../profile/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchUser } from "../../helpers/helper";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);

  const isAuthenticated = useSelector((state) => state.profile.isAuthenticated);

  useEffect(
    function () {
      async function fetch() {
        const savedUser = JSON.parse(
          localStorage.getItem("sb-ywipdwyvwyrqejrfdahl-auth-token")
        );

        if (savedUser) {
          const userApi = await fetchUser(savedUser);
          dispatch(setUser(userApi));
          dispatch(setIsAuthenticated(true));
        }
        setAuthChecked(true);
      }
      fetch();
    },
    [dispatch]
  );

  useEffect(
    function () {
      if (authChecked && !isAuthenticated) {
        toast.error("Please login first");
        navigate("/login");
      }
    },
    [isAuthenticated, authChecked, navigate]
  );

  if (!authChecked) return <Loader />;

  return (
    <div className="w-full laptop:h-[90vh] flex flex-col laptop:flex-row mt-12 laptop:mt-16 bg-zinc-100 laptop:rounded-4xl overflow-hidden">
      <ProfileSidebar />
      <Outlet />
    </div>
  );
}

export default Profile;
