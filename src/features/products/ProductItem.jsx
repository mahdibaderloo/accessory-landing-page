function ProductItem({ product, onClick }) {
  const { name, image, price } = product;

  return (
    <li
      onClick={onClick}
      className="bg-zinc-50 flex flex-col w-40 tablet:w-50 laptop:w-50 desktop:w-52 gap-6 laptop:gap-8 desktop:gap-16 shadow p-2 rounded-xl tablet:p-3 laptop:cursor-pointer"
    >
      <img
        src={image}
        alt="productImage"
        className="w-34 h-34 self-center rounded-sm laptop:rounded-lg desktop:rounded-xl tablet:w-44 tablet:h-44 laptop:w-44 laptop:h-44 desktop:w-44 desktop:h-44"
      />
      <div className="w-full">
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

export default ProductItem;
