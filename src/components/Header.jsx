import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openSidebar } from "./sidebarSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between bg-zinc-800 pl-2 absolute top-0 left-0 right-0">
      <img
        src="/menu.svg"
        className="w-10"
        alt="menu"
        onClick={() => dispatch(openSidebar(0))}
      />
      <Link to="/">
        <img src="/logo.svg" className="w-12" alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
