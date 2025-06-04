import { useState } from "react";

import ProfileSidebarItem from "./ProfileSidebarItem";

import profileIcon from "../../data/images/profile.svg";
import orderIcon from "../../data/images/order.svg";
import heartIcon from "../../data/images/heart.svg";
import notificationIcon from "../../data/images/notification.svg";
import logoutIcon from "../../data/images/logout.svg";

function ProfileSidebar() {
  const items = [
    { id: "profile", label: "My Profile", icon: profileIcon },
    { id: "orders", label: "Orders", icon: orderIcon },
    { id: "favorites", label: "Favorites", icon: heartIcon },
    { id: "notifications", label: "Notifications", icon: notificationIcon },
  ];

  return (
    <ul className="bg-zinc-50 w-[30%] p-6 flex flex-col">
      {items.map((item) => (
        <ProfileSidebarItem item={item} key={item.id} />
      ))}

      <li className="flex items-center gap-2 mt-auto pl-1 mb-1 p-2 rounded-lg laptop:hover:bg-zinc-300 transition-all duration-200 laptop:cursor-pointer">
        <img src={logoutIcon} alt="icon" className="w-8" />
        <span className="font-semibold text-red-950">Logout</span>
      </li>
    </ul>
  );
}

export default ProfileSidebar;
