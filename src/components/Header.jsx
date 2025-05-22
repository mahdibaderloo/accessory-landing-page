import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between bg-zinc-800 pl-2 absolute top-0 left-0 right-0">
      <img src="../../public/menu.svg" className="w-10" alt="menu" />
      <Link to="/">
        <img src="../../public/logo.svg" className="w-12" alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
