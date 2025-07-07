import starIcon from "../../data/images/star.svg";
import stockIcon from "../../data/images/stock.svg";
import ProductOptions from "./ProductOptions";

function ProductDetails({ product }) {
  const { id, name, price, image, category, description, rating, stock } =
    product;

  return (
    <div className="p-2 text-sm flex flex-col gap-4 text-zinc-800 tablet:text-lg tablet:w-[70%] tablet:mx-auto laptop:w-full laptop:flex-row desktop:border desktop:border-zinc-200 desktop:rounded-2xl desktop:py-20">
      <p className="tablet:mx-auto laptop:hidden">
        Products / {category} /{" "}
        <span className="font-semibold text-zinc-900">{name}</span>
      </p>
      <img
        src={image}
        alt="product image"
        className="w-40 h-40 shadow mx-auto tablet:w-60 tablet:h-60 laptop:w-84 laptop:h-84"
      />
      <div className="laptop:mx-auto">
        <div className="w-full flex flex-col gap-4 laptop:gap-8 laptop:items-start">
          <p className="hidden laptop:block laptop:text-xl">
            Products / {category} /{" "}
            <span className="font-semibold text-zinc-900">{name}</span>
          </p>

          <div className="flex items-center justify-center gap-10">
            <div className="flex items-center gap-1">
              <img src={starIcon} alt="star icon" className="w-4 laptop:w-6" />
              <span className="font-semibold text-center text-[20px] tablet:text-lg laptop:text-xl">
                {rating}/5
              </span>
            </div>

            <p className="font-semibold text-center text-[24px] tablet:text-xl laptop:text-3xl">
              $ {price}
            </p>

            <div className="flex items-center gap-1">
              <img src={stockIcon} alt="star icon" className="w-4 laptop:w-6" />
              <span className="font-semibold text-center text-[20px] tablet:text-lg laptop:text-xl">
                {stock}
              </span>
            </div>
          </div>
          <p className="tablet:mx-auto">{description}</p>
        </div>

        <ProductOptions product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;
