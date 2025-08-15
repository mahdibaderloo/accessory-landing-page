import { useNavigate } from "react-router-dom";
import icon404 from "../data/images/404.svg";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-zinc-800 font-barlow">
      <p className="text-zinc-50 text-[200px] tablet:text-[300px] font-bold">
        404
      </p>
      <div className="flex items-center gap-3">
        <img src={icon404} alt="icon" className="w-10" />
        <p className="text-zinc-200 text-2xl">PAGE NOT FOUND</p>
      </div>
      <button
        className="bg-zinc-200 text-zinc-800 px-3 py-2 mt-4 rounded-xl cursor-pointer font-medium hover:bg-zinc-300 transition-all duration-200"
        onClick={() => navigate("/")}
      >
        Back to home
      </button>
    </div>
  );
}

export default PageNotFound;
