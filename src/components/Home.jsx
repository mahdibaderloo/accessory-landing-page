import { useLoaderData, useNavigate } from "react-router-dom";
import { getProducts } from "../services/apiProducts";
import ProductsWrapper from "../features/products/ProductsWrapper";
import Ads from "./Ads";
import MainPic from "./MainPic";
import Search from "./Search";
import Button from "./Button";

function Home() {
  const products = useLoaderData();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/products");
  }

  return (
    <main>
      <MainPic />
      <Search />
      <ProductsWrapper products={products} count={8} />
      <Button onClick={handleClick}>View All</Button>
      <Ads />
    </main>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Home;
