import { getUsers } from "../../services/apiUsers";
import { Outlet, useLoaderData } from "react-router-dom";
import { setUser } from "../profile/profileSlice";

import ProfileSidebar from "../profile/ProfileSidebar";
import { useDispatch } from "react-redux";

function Profile() {
  const user = useLoaderData();
  const dispatch = useDispatch();

  if (user) dispatch(setUser(user));

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
