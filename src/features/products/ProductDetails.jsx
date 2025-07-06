import starIcon from "../../data/images/star.svg";
import stockIcon from "../../data/images/stock.svg";

function ProductDetails({ product }) {
  const { id, name, price, image, category, description, rating, stock } =
    product;

  return (
    <div className="p-2 text-[18px] flex flex-col gap-4 text-zinc-800">
      <p className="">
        Products / {category} /{" "}
        <span className="font-semibold text-zinc-900">{name}</span>
      </p>
      <img
        src={image}
        alt="product image"
        className="w-40 h-40 shadow mx-auto"
      />
      <div className="w-full flex flex-col gap-4">
        {/* <h3>{name}</h3> */}
        <div className="flex items-center justify-center gap-10">
          <div className="flex items-center gap-1">
            <img src={starIcon} alt="star icon" className="w-4" />
            <span className="font-semibold text-center text-[20px]">
              {rating}/5
            </span>
          </div>
          <p className="font-semibold text-center text-[24px]">$ {price}</p>
          <div className="flex items-center gap-1">
            <img src={stockIcon} alt="star icon" className="w-4" />
            <span className="font-semibold text-center text-[20px]">
              {stock}
            </span>
          </div>
        </div>
        {/* <p>
          Products / {category} / {name}
        </p> */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
