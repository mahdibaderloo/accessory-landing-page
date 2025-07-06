import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";
import Loader from "../../components/Loader";
import ProductDetails from "../products/ProductDetails";
import ProductOptions from "../products/ProductOptions";

function Product() {
  const product = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) return <Loader />;

  return (
    <div className="mt-16">
      <Link to="/products"></Link>
      <ProductDetails product={product.at(0)} />
      <ProductOptions />
    </div>
  );
}

export async function loader({ params }) {
  const { productId } = params;
  const product = await getProduct(productId);
  return product;
}

export default Product;
