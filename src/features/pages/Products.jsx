import { useLoaderData, useNavigation } from "react-router-dom";

import { getProducts } from "../../services/apiProducts";

import Search from "../../components/Search";
import Categories from "../products/Categories";
import ProductsWrapper from "../products/ProductsWrapper";
import Loader from "../../components/Loader";

function Products() {
  const products = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <main className="mt-16">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Categories items={products} />
          <Search />
          <ProductsWrapper products={products} count={16} />
        </>
      )}
    </main>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Products;
