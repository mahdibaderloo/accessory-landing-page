import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeSidebar, openSidebar } from "./sidebarSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between items-center pl-2 absolute top-0 left-0 right-0 desktop:max-w-[1536px] desktop:mx-auto desktop:h-16">
      <img
        src="/menu.svg"
        className="w-10 laptop:hidden"
        alt="menu"
        onClick={() => dispatch(openSidebar(0))}
      />
      <ul className="hidden laptop:flex gap-6 font-semibold text-zinc-800 pl-2 desktop:font-bold">
        <li>
          <Link
            to="/products"
            onClick={() => dispatch(closeSidebar())}
            className="hover:text-cyan-800 transition-all duration-200"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/Cart"
            onClick={() => dispatch(closeSidebar())}
            className="hover:text-cyan-800 transition-all duration-200"
          >
            Shopping Cart
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={() => dispatch(closeSidebar())}
            className="hover:text-cyan-800 transition-all duration-200"
          >
            Sign in
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => dispatch(closeSidebar())}
            className="hover:text-cyan-800 transition-all duration-200"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => dispatch(closeSidebar())}
            className="hover:text-cyan-800 transition-all duration-200"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <Link to="/">
        <img src="/logo.svg" className="w-12 desktop:w-14" alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
