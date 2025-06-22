import { useLoaderData } from "react-router-dom";
import { getProducts } from "../services/apiProducts";
import ProductsWrapper from "../features/products/ProductsWrapper";
import Ads from "./Ads";
import MainPic from "./MainPic";
import Search from "./Search";
import ViewAllButton from "./ViewAllButton";
import { Suspense } from "react";
import Loader from "./Loader";

function Home() {
  const products = useLoaderData();

  return (
    <main>
      <MainPic />
      <Search />
      <Suspense fallback={<Loader />}>
        <ProductsWrapper products={products} count={8} />
      </Suspense>
      <ViewAllButton />
      <Ads />
    </main>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Home;
