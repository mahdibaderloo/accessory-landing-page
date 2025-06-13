import { useLoaderData } from "react-router-dom";

import Search from "../../components/Search";
import Categories from "../products/Categories";
import ProductsWrapper from "../products/ProductsWrapper";
import Loader from "../../components/Loader";
import { getProducts } from "../../services/apiProducts";

function Products() {
  const products = useLoaderData();

  return (
    <main className="mt-16">
      <Categories items={products} />
      <Search />
      <ProductsWrapper products={products} count={16} />
    </main>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Products;
