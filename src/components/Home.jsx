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
    <Suspense fallback={<Loader />}>
      <main>
        <MainPic />
        <Search />
        <ProductsWrapper products={products} count={4} />
        <ViewAllButton />
        <Ads />
      </main>
    </Suspense>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Home;
