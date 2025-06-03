import ProductsWrapper from "../features/products/ProductsWrapper";
import MainPic from "./MainPic";
import Search from "./Search";

function Home() {
  return (
    <main>
      <MainPic />
      <Search />
      <ProductsWrapper />
    </main>
  );
}

export default Home;
