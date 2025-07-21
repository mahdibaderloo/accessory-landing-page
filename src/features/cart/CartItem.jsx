import trashIcon from "../../data/images/trash.svg";

function CartItem({ item }) {
  const { name, price, image, count } = item;

  return (
    <li className="w-full bg-zinc-50 flex justify-between items-center rounded-lg shadow p-2 mb-2 laptop:h-24 laptop:mb-3 laptop:px-4">
      <div className="flex items-center gap-8">
        <img
          src={image}
          alt="product"
          className="w-10 h-10 rounded-lg laptop:h-20 laptop:w-20"
        />
        <div>
          <p className="text-lg font-medium tracking-wide laptop:font-semibold laptop:text-xl">
            {name}
          </p>
          <p className="tracking-wide text-lg">${price}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="bg-zinc-700 rounded-md w-12 text-zinc-100 px-1.5 flex items-center justify-between laptop:text-xl laptop:w-16 font-semibold">
          <button className="laptop:cursor-pointer">-</button>
          <span>{count}</span>
          <button className="laptop:cursor-pointer">+</button>
        </div>
        <img
          src={trashIcon}
          alt="trash"
          className="w-6 hidden cursor-pointer laptop:block"
        />
      </div>
    </li>
  );
}

export default CartItem;
