import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeSidebar } from "./sidebarSlice";

import closeIcon from "../data/images/close.svg";

function Sidebar() {
  const leftPos = useSelector((state) => state.sidebar.left);
  const isAuth = useSelector((state) => state.profile.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <ul
      className="w-full bg-zinc-800 fixed z-50 top-0 bottom-0 p-2 pl-4 flex flex-col gap-8 text-zinc-200 transition-all duration-300 ease-in-out overflow-hidden"
      style={{ left: leftPos }}
    >
      <li className="flex justify-end m-4">
        <img
          src={closeIcon}
          alt="close"
          className="w-10"
          onClick={() => dispatch(closeSidebar())}
        />
      </li>
      <li className="text-lg font-medium">
        <Link to="/products" onClick={() => dispatch(closeSidebar())}>
          Products
        </Link>
      </li>
      <li className="text-lg font-medium">
        <Link to="/Cart" onClick={() => dispatch(closeSidebar())}>
          Shopping Cart
        </Link>
      </li>
      <li className="text-lg font-medium">
        {isAuth ? (
          <Link to="/profile" onClick={() => dispatch(closeSidebar())}>
            Dashboard
          </Link>
        ) : (
          <Link to="/login" onClick={() => dispatch(closeSidebar())}>
            Log in/Sign up
          </Link>
        )}
      </li>
      <li className="text-lg font-medium">
        <Link to="/" onClick={() => dispatch(closeSidebar())}>
          About us
        </Link>
      </li>
      <li className="text-lg font-medium">
        <Link to="/contact-us" onClick={() => dispatch(closeSidebar())}>
          Contact us
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
