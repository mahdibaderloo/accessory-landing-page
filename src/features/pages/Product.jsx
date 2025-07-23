import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";
import Loader from "../../components/Loader";
import ProductDetails from "../products/ProductDetails";

function Product() {
  const product = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) return <Loader />;

  return (
    <div className="mt-16 desktop:mt-20">
      <Link
        to={-1}
        className="hidden laptop:block mb-10 ml-6 cursor-pointer text-zinc-800 bg-zinc-300 w-fit px-2 py-1 hover:bg-zinc-400 transition-all duration-200 desktop:ml-0 rounded-lg"
      >
        &larr; Back
      </Link>
      <ProductDetails product={product.at(0)} />
    </div>
  );
}

export async function loader({ params }) {
  const { productId } = params;
  const product = await getProduct(productId);
  return product;
}

export default Product;
