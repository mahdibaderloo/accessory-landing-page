import ProductItem from "./ProductItem";

function ProductsWrapper() {
  const productsArray = new Array(4).fill(null);

  return (
    <ul className="mx-auto flex flex-wrap justify-center gap-2 tablet:mx-2 tablet:gap-3 laptop:gap-5">
      {productsArray.map((product) => (
        <ProductItem product={product} />
      ))}
    </ul>
  );
}

export default ProductsWrapper;
