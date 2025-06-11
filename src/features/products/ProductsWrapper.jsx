import ProductItem from "./ProductItem";

function ProductsWrapper({ products, count }) {
  // const productsArray = new Array(count).fill(products);
  // console.log(productsArray);

  return (
    <ul className="mx-auto flex flex-wrap justify-center gap-2 tablet:mx-2 tablet:gap-3 laptop:gap-5">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ProductsWrapper;
