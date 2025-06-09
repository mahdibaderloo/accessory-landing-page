import { useSelector } from "react-redux";

import Loader from "../../components/Loader";
import ProfileForm from "../profile/ProfileForm";
import ProfileOrders from "../profile/ProfileOrders";
import ProfileFavorites from "../profile/ProfileFavorites";
import Notifications from "../profile/Notifications";
import ProfileSidebar from "../profile/ProfileSidebar";
import { Outlet } from "react-router-dom";

function Profile() {
  const profile = useSelector((state) => state.profile);

  // function renderActiveSection() {
  //   switch (profile.activeSection) {
  //     case "profile":
  //       return <ProfileForm />;
  //     case "orders":
  //       return <ProfileOrders />;
  //     case "favorites":
  //       return <ProfileFavorites />;
  //     case "notifications":
  //       return <Notifications />;
  //   }
  // }

  return (
    <div className="w-full h-[90vh] flex mt-16 bg-zinc-100 rounded-4xl overflow-hidden">
      <ProfileSidebar />
      <Outlet />
      {/* {profile.isLoading ? <Loader /> : renderActiveSection()} */}
    </div>
  );
}

export default Profile;
