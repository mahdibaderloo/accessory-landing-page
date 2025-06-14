import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "./profileSlice";
import { Link } from "react-router-dom";

function ProfileSidebarItem({ item }) {
  const active = useSelector((state) => state.profile.activeSection);
  const dispatch = useDispatch();

  const { id, to, label, icon } = item;

  return (
    <Link
      to={to}
      onClick={() => dispatch(setActiveSection(id))}
      className={`w-full flex items-center gap-2 pl-1 mb-1 p-2 text-sm laptop:text-lg rounded-lg text-zinc-700 laptop:hover:bg-zinc-300 transition-all duration-200 laptop:cursor-pointer ${
        active === item.id && "bg-zinc-300 text-black"
      }`}
    >
      <img src={icon} alt="icon" className="w-6 laptop:w-8" />
      <span className="font-semibold">{label}</span>
    </Link>
  );
}

export default ProfileSidebarItem;
