import ProductItem from "./ProductItem";

function ProductsWrapper({ products, count }) {
  const visibleProducts = products.slice(0, count);

  return (
    <ul className="mx-auto flex flex-wrap justify-center gap-2 tablet:mx-2 tablet:gap-3 laptop:gap-5">
      {visibleProducts.slice(0, count).map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ProductsWrapper;
