import { useNavigate } from "react-router-dom";

function FavoriteItem({ item }) {
  const navigate = useNavigate();

  const { id, name, price } = item;

  return (
    <li
      onClick={() => navigate(`/product/${id}`)}
      className="bg-zinc-50 flex flex-col w-26 h-fit tablet:w-32 laptop:w-36 desktop:w-48 gap-4 laptop:gap-4 desktop:gap-4 shadow p-2 rounded-xl tablet:p-3 laptop:cursor-pointer"
    >
      <img
        src=""
        alt="productImage"
        className="w-22 h-22 self-center rounded-sm  laptop:rounded-lg desktop:rounded-xl tablet:w-28 tablet:h-28 laptop:w-32 laptop:h-32 desktop:w-42 desktop:h-42"
      />
      <div className="text-sm w-full tablet:text-md laptop:text-lg desktop:text-xl">
        <p className="font-medium break-all">{name}</p>
        <p className="">${price}</p>
      </div>
    </li>
  );
}

export default FavoriteItem;
