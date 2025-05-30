function Search() {
  return (
    <div className="w-[90%] tablet:w-[80%] laptop:w-[50%] bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-200 mx-auto mt-16 h-12 flex gap-2 rounded-full p-2 shadow">
      <img
        src="./search.svg"
        alt="search-icon"
        className="w-5 tablet:w-7 cursor-pointer"
      />
      <input
        type="text"
        id=""
        placeholder="Search..."
        className="w-full h-full outline-none border-none text-md tablet:text-xl"
      />
    </div>
  );
}

export default Search;
