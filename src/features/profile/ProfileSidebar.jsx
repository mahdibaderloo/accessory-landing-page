import ProfileSidebarItem from "./ProfileSidebarItem";

import profileIcon from "../../data/images/profile.svg";
import orderIcon from "../../data/images/order.svg";
import heartIcon from "../../data/images/heart.svg";
import notificationIcon from "../../data/images/notification.svg";
import logoutIcon from "../../data/images/logout.svg";

function ProfileSidebar() {
  const items = [
    { id: "profile", to: "/profile", label: "My Profile", icon: profileIcon },
    { id: "orders", to: "/profile/orders", label: "Orders", icon: orderIcon },
    {
      id: "favorites",
      to: "/profile/favorites",
      label: "Favorites",
      icon: heartIcon,
    },
    {
      id: "notifications",
      to: "/profile/notifications",
      label: "Notifications",
      icon: notificationIcon,
    },
  ];

  return (
    <div className="w-full bg-zinc-50 laptop:w-[30%] p-6 flex flex-col justify-center">
      {items.map((item) => (
        <ProfileSidebarItem item={item} key={item.id} />
      ))}

      <div className="flex items-center justify-start gap-2 mt-auto pl-1 mb-1 p-2 text-sm laptop:text-lg rounded-lg laptop:hover:bg-zinc-300 transition-all duration-200 laptop:cursor-pointer">
        <img src={logoutIcon} alt="icon" className="w-6 laptop:w-8" />
        <span className="font-semibold text-red-950">Logout</span>
      </div>
    </div>
  );
}

export default ProfileSidebar;
