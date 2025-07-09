import { getUsers } from "../../services/apiUsers";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { setUser } from "../profile/profileSlice";

import ProfileSidebar from "../profile/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";

function Profile() {
  const userData = useLoaderData();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((state) => state.profile.user);

  useEffect(
    function () {
      if (!user || user.length < 1) {
        toast.error("Please login first");
        navigate("/login");
      }
    },
    [user, navigate]
  );

  useEffect(
    function () {
      if (userData) dispatch(setUser(userData));
    },
    [userData, dispatch]
  );

  if (!user || !user[0]) return <Loader />;

  return (
    <div className="w-full laptop:h-[90vh] flex flex-col laptop:flex-row mt-12 laptop:mt-16 bg-zinc-100 laptop:rounded-4xl overflow-hidden">
      <ProfileSidebar />
      <Outlet />
    </div>
  );
}

export async function loader() {
  const user = await getUsers();
  return user;
}

export default Profile;
