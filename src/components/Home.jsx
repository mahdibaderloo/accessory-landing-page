import ProductsWrapper from "../features/products/ProductsWrapper";
import Ads from "./Ads";
import MainPic from "./MainPic";
import Search from "./Search";
import ViewAllButton from "./ViewAllButton";

function Home() {
  return (
    <main>
      <MainPic />
      <Search />
      <ProductsWrapper count={4} />
      <ViewAllButton />
      <Ads />
    </main>
  );
}

export default Home;
