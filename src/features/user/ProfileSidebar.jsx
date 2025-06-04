import { useState } from "react";

import ProfileSidebarItem from "./ProfileSidebarItem";

import profileIcon from "../../data/images/profile.svg";
import orderIcon from "../../data/images/order.svg";
import heartIcon from "../../data/images/heart.svg";
import notificationIcon from "../../data/images/notification.svg";

function ProfileSidebar() {
  const [active, setActive] = useState("profile");

  const items = [
    { id: "profile", label: "My Profile", icon: profileIcon },
    { id: "orders", label: "Orders", icon: orderIcon },
    { id: "favorites", label: "Favorites", icon: heartIcon },
    { id: "notifications", label: "Notifications", icon: notificationIcon },
  ];

  return (
    <ul className="bg-white w-[30%] p-6">
      {items.map((item) => (
        <ProfileSidebarItem
          item={item}
          key={item.id}
          active={active}
          setActive={setActive}
        />
      ))}
    </ul>
  );
}

export default ProfileSidebar;
