import { useDispatch } from "react-redux";
import trashIcon from "../../data/images/trash.svg";
import { decreaseItemCount, increaseItemCount, removeItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const { id, name, price, image, count } = item;

  function handleDecrease() {
    dispatch(decreaseItemCount(id));
  }

  function handleIncrease() {
    dispatch(increaseItemCount(id));
  }

  function handleRemove() {
    dispatch(removeItem(id));
  }

  return (
    <li className="w-full bg-zinc-50 flex flex-col laptop:flex-row justify-between items-center rounded-lg shadow p-2 mb-2 laptop:h-24 laptop:mb-3 laptop:px-4">
      <div className="w-full flex justify-between laptop:justify-start items-center gap-8">
        <img
          src={image}
          alt="product"
          className="w-18 h-18 rounded-lg laptop:h-24 laptop:w-24"
        />
        <div>
          <p className="text-md font-medium tracking-wide laptop:font-semibold laptop:text-xl">
            {name}
          </p>
          <p className="hidden tracking-wide text-lg font-medium text-zinc-800 laptop:block">
            ${price}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between tablet:flex-row laptop:justify-end gap-2 mt-2">
        <div className="bg-zinc-700 rounded-md w-18 text-zinc-100 text-lg px-1.5 py-1 flex items-center justify-between laptop:text-xl laptop:w-16 font-semibold">
          <button
            onClick={handleDecrease}
            className="laptop:cursor-pointer font-semibold text-lg"
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={handleIncrease}
            className="laptop:cursor-pointer font-semibold text-lg"
          >
            +
          </button>
        </div>
        <p className="tracking-wide text-lg font-medium text-zinc-800 laptop:hidden">
          ${price}
        </p>
        <img
          src={trashIcon}
          onClick={handleRemove}
          alt="trash"
          className="w-6 hidden cursor-pointer laptop:block"
        />
      </div>
    </li>
  );
}

export default CartItem;
