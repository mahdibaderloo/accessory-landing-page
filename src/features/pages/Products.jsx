import { useLoaderData, useNavigation } from "react-router-dom";

import { getProducts } from "../../services/apiProducts";

import Search from "../../components/Search";
import Categories from "../products/Categories";
import ProductsWrapper from "../products/ProductsWrapper";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCategoryItems } from "../products/categorySlice";

function Products() {
  const [count, setCount] = useState(20);
  let products = [];
  products = useLoaderData();

  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  function handleClickMore() {
    if (count !== 100) {
      setCount((count) => (count = count + 10));
    }
  }

  function handleClickLess() {
    setCount(20);
  }

  function handleClickAll() {
    dispatch(showCategoryItems("all"));
  }

  return (
    <main className="mt-16 p-1">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Categories items={products} />
          <Search />
          <ProductsWrapper products={products} count={count} />
          {category === "all" ? (
            count !== 100 ? (
              <Button onClick={handleClickMore}>Show More</Button>
            ) : (
              <Button onClick={handleClickLess}>Show Less</Button>
            )
          ) : (
            <Button onClick={handleClickAll}>Show All Products</Button>
          )}
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
