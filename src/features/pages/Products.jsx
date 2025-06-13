import { useLoaderData } from "react-router-dom";

import Search from "../../components/Search";
import Categories from "../products/Categories";
import ProductsWrapper from "../products/ProductsWrapper";
import { getProducts } from "../../services/apiProducts";
import { Suspense } from "react";
import Loader from "../../components/Loader";

function Products() {
  const products = useLoaderData();

  return (
    <Suspense fallback={<Loader />}>
      <main className="mt-16">
        <Categories items={products} />
        <Search />
        <ProductsWrapper products={products} count={16} />
      </main>
    </Suspense>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Products;
