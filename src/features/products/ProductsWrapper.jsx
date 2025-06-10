import ProductItem from "./ProductItem";

function ProductsWrapper({ count }) {
  const productsArray = new Array(count).fill(null);

  return (
    <ul className="mx-auto flex flex-wrap justify-center gap-2 tablet:mx-2 tablet:gap-3 laptop:gap-5">
      {productsArray.map((product) => (
        <ProductItem product={product} key={product} />
      ))}
    </ul>
  );
}

export default ProductsWrapper;
