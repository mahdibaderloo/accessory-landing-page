import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeSidebar } from "./sidebarSlice";

function Sidebar() {
  const leftPos = useSelector((state) => state.sidebar.left);
  const dispatch = useDispatch();

  return (
    <ul
      className="w-full h-screen bg-zinc-800 absolute top-0 p-2 pl-4 flex flex-col gap-4 text-zinc-200 transition-all duration-300 ease-in-out"
      style={{ left: leftPos }}
    >
      <li className="flex justify-end mb-6">
        <img
          src="../../public/close.svg"
          alt="close"
          className="w-8"
          onClick={() => dispatch(closeSidebar())}
        />
      </li>
      <li>
        <Link to="/products" onClick={() => dispatch(closeSidebar())}>
          Products
        </Link>
      </li>
      <li>
        <Link to="/Cart" onClick={() => dispatch(closeSidebar())}>
          Shopping Cart
        </Link>
      </li>
      <li>
        <Link to="/login" onClick={() => dispatch(closeSidebar())}>
          Sign in / Sign up
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => dispatch(closeSidebar())}>
          About us
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => dispatch(closeSidebar())}>
          Contact us
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
