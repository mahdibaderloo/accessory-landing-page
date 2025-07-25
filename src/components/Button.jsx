import bagIcon from "../data/images/bag.svg";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent flex gap-2 w-fit mx-auto justify-center items-center border-2 border-zinc-600 rounded-2xl text-sm px-1.5 py-0.5 tablet:px-4 tablet:py-1 laptop:text-lg m-8 laptop:cursor-pointer laptop:hover:bg-zinc-100 transition-all duration-200"
    >
      <img src={bagIcon} alt="icon" className="w-4" />
      <span className="text-shadow-zinc-800">{children}</span>
    </button>
  );
}

export default Button;
