import productImage from "../../data/images/ads-image.jpg";

function ProductItem({ product }) {
  return (
    <li className="bg-zinc-50 flex flex-col w-26 tablet:w-32 laptop:w-36 desktop:w-44 gap-4 shadow p-2 rounded-sm laptop:rounded-md tablet:p-3 laptop:cursor-pointer">
      <img
        src={productImage}
        alt="productImage"
        className="w-22 h-22 self-center rounded-sm tablet:w-28 tablet:h-28 laptop:w-32 laptop:h-32 desktop:w-40 desktop:h-40"
      />
      <div className="text-sm w-full tablet:text-md laptop:text-lg desktop:text-xl">
        <p className="font-medium break-all">product title</p>
        <p className="">$245</p>
      </div>
    </li>
  );
}

export default ProductItem;
