import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "./profileSlice";

function ProfileSidebarItem({ item }) {
  const active = useSelector((state) => state.profile.activeSection);
  const dispatch = useDispatch();

  const { id, label, icon } = item;

  return (
    <li
      id={id}
      onClick={() => dispatch(setActiveSection(id))}
      className={`flex items-center gap-2 pl-1 mb-1 p-2 rounded-lg text-zinc-700 laptop:hover:bg-zinc-300 transition-all duration-200 laptop:cursor-pointer ${
        active === item.id && "bg-zinc-300 text-black"
      }`}
    >
      <img src={icon} alt="icon" className="w-8" />
      <span className="font-semibold">{label}</span>
    </li>
  );
}

export default ProfileSidebarItem;
