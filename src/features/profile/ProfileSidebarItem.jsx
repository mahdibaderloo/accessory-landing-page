import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "./profileSlice";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ProfileSidebarItem({ item }) {
  const notifications = useSelector((state) => state.profile.notifications);
  const active = useSelector((state) => state.profile.activeSection);
  const dispatch = useDispatch();

  const location = useLocation();
  const currentLocation = location.pathname.slice(9);

  const { id, to, label, icon } = item;

  useEffect(
    function () {
      dispatch(setActiveSection(currentLocation));
    },
    [dispatch, currentLocation]
  );

  return (
    <Link
      to={to}
      onClick={() => dispatch(setActiveSection(id))}
      className={`w-full flex items-center gap-2 pl-1 mb-1 p-2 text-sm laptop:text-lg rounded-lg text-zinc-700 laptop:hover:bg-zinc-300 transition-all duration-200 laptop:cursor-pointer ${
        active === item.id && "bg-zinc-300 text-zinc-800"
      }`}
    >
      <img src={icon} alt="icon" className="w-8 tablet:w-10 desktop:w-8" />
      <span className="font-semibold text-lg desktop:text-xl">{label}</span>
      {id === "notifications" && notifications?.length > 0 && (
        <span className="text-sm desktop:text-md bg-red-500 text-zinc-50 w-5 h-5 desktop:w-3.5 desktop:h-3.5 text-center rounded-full ml-auto">
          {notifications.length}
        </span>
      )}
    </Link>
  );
}

export default ProfileSidebarItem;
