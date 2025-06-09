import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openSidebar } from "./sidebarSlice";

import logoIcon from "../data/images/logo.svg";
import menuIcon from "../data/images/menu.svg";
import profileIcon from "../data/images/profile.svg";
import cartIcon from "../data/images/cart.svg";
import { setActiveSection } from "../features/user/profileSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between items-center pl-2 fixed z-40 bg-white shadow-sm tablet:shadow-none top-0 left-0 right-0 desktop:max-w-[1536px] desktop:mx-auto desktop:h-16">
      <img
        src={menuIcon}
        className="w-10 laptop:hidden"
        alt="menu"
        onClick={() => dispatch(openSidebar(0))}
      />
      <ul className="hidden laptop:flex items-center gap-4 font-semibold text-zinc-800 pl-2 desktop:font-bold">
        <li>
          <Link to="/">
            <img src={logoIcon} className="w-12 desktop:w-14" alt="logo" />
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="hover:text-cyan-800 transition-all duration-200"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-cyan-800 transition-all duration-200"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-cyan-800 transition-all duration-200"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <ul className="hidden laptop:flex items-center font-semibold text-zinc-800 gap-4 pr-7 desktop:font-bold">
        <li>
          <Link
            to="/profile"
            className="flex items-center"
            onClick={() => dispatch(setActiveSection("profile"))}
          >
            <img src={profileIcon} className="w-6 desktop:w-7.5" alt="logo" />
            <span className="text-zinc-600">Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/Cart">
            <img src={cartIcon} className="w-6 desktop:w-8" alt="logo" />
          </Link>
        </li>
      </ul>
      <Link to="/" className="laptop:hidden">
        <img src={logoIcon} className="w-12 desktop:w-14" alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
