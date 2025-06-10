import Search from "../../components/Search";
import Categories from "../products/Categories";
import ProductsWrapper from "../products/ProductsWrapper";

function Products() {
  return (
    <main className="mt-16">
      <Categories />
      <Search />
      <ProductsWrapper count={16} />
    </main>
  );
}

export default Products;
