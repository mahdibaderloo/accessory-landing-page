import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function ProductsWrapper({ products, count }) {
  const category = useSelector((state) => state.category.category);

  let visibleProducts = products.slice(0, count);

  if (category !== "all") {
    visibleProducts = products.filter(
      (product) => product.category === category
    );
  }

  return (
    <ul className="mx-auto flex flex-wrap justify-center gap-2 tablet:mx-2 tablet:gap-3 laptop:gap-5">
      {visibleProducts.slice(0, count).map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ProductsWrapper;
