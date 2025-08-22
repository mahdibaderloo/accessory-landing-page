import { useNavigate } from "react-router-dom";

function FavoriteItem({ item }) {
  const navigate = useNavigate();

  const { id, name, price, image } = item;

  return (
    <li
      onClick={() => navigate(`/product/${id}`)}
      className="bg-zinc-50 flex flex-col w-40 tablet:w-50 laptop:w-50 desktop:w-52 gap-6 laptop:gap-8 desktop:gap-16 shadow p-2 rounded-xl tablet:p-3 laptop:cursor-pointer"
    >
      <img
        src={image}
        alt="productImage"
        className="w-34 h-34 self-center rounded-sm laptop:rounded-lg desktop:rounded-xl tablet:w-44 tablet:h-44"
      />
      <div className="text-sm w-full tablet:text-md laptop:text-lg desktop:text-xl">
        <p className="font-medium break-all text-lg tablet:text-xl laptop:text-xl desktop:text-xl truncate">
          {name}
        </p>
        <p className="text-lg tablet:text-xl font-medium text-zinc-800 mt-2">
          ${price}
        </p>
      </div>
    </li>
  );
}

export default FavoriteItem;
