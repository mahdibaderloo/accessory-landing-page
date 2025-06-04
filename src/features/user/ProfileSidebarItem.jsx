function ProfileSidebarItem({ item, active, setActive }) {
  const { id, label, icon } = item;

  return (
    <li
      id={id}
      onClick={() => setActive(id)}
      className={`flex items-center gap-2 pl-1 mb-1 p-2 rounded-lg text-zinc-700 laptop:hover:bg-zinc-300 transition-all duration-200 laptop:cursor-pointer ${
        active === item.id
          ? "bg-zinc-300 text-black"
          : "text-zinc-700 hover:bg-zinc-200"
      }`}
    >
      <img src={icon} alt="icon" className="w-8" />
      <span className="font-semibold">{label}</span>
    </li>
  );
}

export default ProfileSidebarItem;
