import { lazy, Suspense, useEffect } from "react";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";
import { useDispatch } from "react-redux";

const ProductsWrapper = lazy(() => import("../products/ProductsWrapper"));
const Ads = lazy(() => import("../../components/Ads"));
const MainPic = lazy(() => import("../../components/MainPic"));
const Search = lazy(() => import("../../components/Search"));
const Button = lazy(() => import("../../components/Button"));

import { showCategoryItems } from "../products/categorySlice";
import Loader from "../../components/Loader";

function Home() {
  const products = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(showCategoryItems("all"));
    },
    [dispatch, setSearchParams]
  );

  function handleClick() {
    navigate("/products");
    setSearchParams({});
  }

  const searchTerm = searchParams.get("search-for")?.toLowerCase() || "";
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <Suspense fallback={<Loader />}>
      <main>
        <MainPic />
        <Search />
        <ProductsWrapper products={filteredProducts} count={8} />
        <Button onClick={handleClick}>View All Products</Button>
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
