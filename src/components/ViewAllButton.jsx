import bagIcon from "../data/images/bag.svg";
import { Link } from "react-router-dom";

function ViewAllButton() {
  return (
    <Link
      to="/products"
      className="bg-transparent flex gap-2 w-fit mx-auto justify-center items-center border-2 border-zinc-600 rounded-2xl px-4 py-1 m-8 laptop:cursor-pointer laptop:hover:bg-zinc-100 transition-all duration-200"
    >
      <img src={bagIcon} alt="icon" className="w-4" />
      <span className="text-shadow-zinc-800">View All</span>
    </Link>
  );
}

export default ViewAllButton;
