import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

import Search from "../../components/Search";
import Categories from "../products/Categories";
import ProductsWrapper from "../products/ProductsWrapper";
import Loader from "../../components/Loader";

function Products() {
  const fetcher = useFetcher();
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/");
    },
    [fetcher]
  );

  console.log(fetcher);

  return (
    <main className="mt-16">
      <Categories />
      <Search />
      {!fetcher.data ? (
        <Loader />
      ) : (
        <ProductsWrapper products={fetcher.data} count={16} />
      )}
    </main>
  );
}

export default Products;
