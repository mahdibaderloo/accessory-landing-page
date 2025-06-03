import ProductsWrapper from "../features/products/ProductsWrapper";
import Ads from "./Ads";
import MainPic from "./MainPic";
import Search from "./Search";

function Home() {
  return (
    <main>
      <MainPic />
      <Search />
      <ProductsWrapper />
      <Ads />
    </main>
  );
}

export default Home;
