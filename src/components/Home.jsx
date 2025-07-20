import { lazy, Suspense, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getProducts } from "../services/apiProducts";
import { useDispatch } from "react-redux";

const ProductsWrapper = lazy(() =>
  import("../features/products/ProductsWrapper")
);
const Ads = lazy(() => import("./Ads"));
const MainPic = lazy(() => import("./MainPic"));
const Search = lazy(() => import("./Search"));
const Button = lazy(() => import("./Button"));

import { showCategoryItems } from "../features/products/categorySlice";
import Loader from "./Loader";

function Home() {
  const products = useLoaderData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(showCategoryItems("all"));
    },
    [dispatch]
  );

  function handleClick() {
    navigate("/products");
  }

  return (
    <Suspense fallback={<Loader />}>
      <main>
        <MainPic />
        <Search />
        <ProductsWrapper products={products} count={8} />
        <Button onClick={handleClick}>View All</Button>
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
