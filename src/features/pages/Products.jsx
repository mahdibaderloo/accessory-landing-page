import Search from "../../components/Search";
import Categories from "../products/Categories";

function Products() {
  return (
    <div className="w-full h-[90vh] mt-16">
      <Categories />
      <Search />
    </div>
  );
}

export default Products;
