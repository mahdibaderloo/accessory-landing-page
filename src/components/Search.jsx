import { useSearchParams } from "react-router-dom";
import searchIcon from "../data/images/search.svg";
import { useEffect, useState } from "react";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(searchParams.get("search-for") || "");
  }, [searchParams]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (value.trim()) {
      searchParams.set("search-for", value);
      setSearchParams(searchParams);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] tablet:w-[80%] laptop:w-[50%] bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-200 mx-auto my-8 h-12 flex gap-2 rounded-full p-1 shadow"
    >
      <button
        type="submit"
        className="bg-zinc-800 px-3 py-1 tablet:py-2 tablet:px-2.5 rounded-full flex justify-center items-center"
      >
        <img
          src={searchIcon}
          alt="search-icon"
          className="w-5 tablet:w-7 cursor-pointer"
        />
      </button>
      <input
        type="text"
        id=""
        placeholder="Search..."
        value={value}
        onChange={(e) => handleChange(e)}
        className="w-full h-full outline-none border-none text-lg tracking-wide tablet:text-xl"
      />
    </form>
  );
}

export default Search;
