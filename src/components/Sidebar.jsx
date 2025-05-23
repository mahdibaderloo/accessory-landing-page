import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="w-full h-screen bg-zinc-800 absolute left-0 top-0 p-2 pl-4 flex flex-col gap-4 text-zinc-200">
      <li className="flex justify-end mb-6">
        <img src="../../public/close.svg" alt="close" className="w-8" />
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/Cart">Shopping Cart</Link>
      </li>
      <li>
        <Link to="/login">Sign in / Sign up</Link>
      </li>
      <li>
        <Link to="/">About us</Link>
      </li>
      <li>
        <Link to="/">Contact us</Link>
      </li>
    </ul>
  );
}

export default Sidebar;
