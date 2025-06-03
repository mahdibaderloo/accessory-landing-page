import searchIcon from "../data/images/search.svg";

function Search() {
  return (
    <form className="w-[90%] tablet:w-[80%] laptop:w-[50%] bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-200 mx-auto my-8 h-12 flex gap-2 rounded-full p-1 shadow">
      <div className="bg-zinc-800 px-3.5 py-1 tablet:py-2 tablet:px-2.5 rounded-full flex justify-center items-center">
        <img
          src={searchIcon}
          alt="search-icon"
          className="w-4 tablet:w-6 cursor-pointer"
        />
      </div>
      <input
        type="text"
        id=""
        placeholder="Search..."
        className="w-full h-full outline-none border-none text-md tracking-wide tablet:text-xl"
      />
    </form>
  );
}

export default Search;
