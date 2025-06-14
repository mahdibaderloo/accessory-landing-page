import { getUsers } from "../../services/apiUsers";
import { Outlet, useLoaderData } from "react-router-dom";

import { UserContext } from "../profile/ProfileContext";
import ProfileSidebar from "../profile/ProfileSidebar";

function Profile() {
  const user = useLoaderData();

  return (
    <UserContext.Provider value={user}>
      <div className="w-full laptop:h-[90vh] flex flex-col laptop:flex-row mt-12 laptop:mt-16 bg-zinc-100 laptop:rounded-4xl overflow-hidden">
        <ProfileSidebar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export async function loader() {
  const user = await getUsers();
  return user;
}

export default Profile;
