import { useLoaderData } from "react-router-dom";
import Search from "../../components/Search";
import { getProducts } from "../../services/apiProducts";
import Categories from "../products/Categories";
import ProductsWrapper from "../products/ProductsWrapper";

function Products() {
  const products = useLoaderData();
  console.log(products);

  return (
    <main className="mt-16">
      <Categories />
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
