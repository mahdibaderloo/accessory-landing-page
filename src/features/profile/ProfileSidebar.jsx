import ProfileSidebarItem from "./ProfileSidebarItem";

import profileIcon from "../../data/images/profile.svg";
import orderIcon from "../../data/images/order.svg";
import heartIcon from "../../data/images/heart.svg";
import notificationIcon from "../../data/images/notification.svg";
import logoutIcon from "../../data/images/logout.svg";
import Modal from "../../components/Modal";
import { openModal } from "../../components/modalSlice";
import { useDispatch } from "react-redux";
import { logOut } from "./profileSlice";
import { useNavigate } from "react-router-dom";

function ProfileSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  async function handleLogout() {
    await dispatch(logOut());
    navigate("/login");
  }

  return (
    <div className="w-full bg-zinc-50 laptop:w-[30%] p-6 flex flex-col justify-center">
      {items.map((item) => (
        <ProfileSidebarItem item={item} key={item.id} />
      ))}

      <div
        className="flex items-center justify-start gap-2 mt-auto pl-1 mb-1 p-2 text-sm laptop:text-lg rounded-lg laptop:hover:bg-zinc-300 transition-all duration-200 laptop:cursor-pointer"
        onClick={() => dispatch(openModal())}
      >
        <img src={logoutIcon} alt="icon" className="w-8 laptop:w-10" />
        <span className="font-semibold text-lg desktop:text-xl text-red-950">
          Logout
        </span>
      </div>

      <Modal onConfirm={handleLogout}>
        Are you sure you want to log out of your account?
      </Modal>
    </div>
  );
}

export default ProfileSidebar;
