import { useLoaderData, useNavigation } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";
import Loader from "../../components/Loader";

function Product() {
  const product = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) return <Loader />;

  return <div>hello</div>;
}

export async function loader({ params }) {
  const { productId } = params;
  const product = await getProduct(productId);
  return product;
}

export default Product;
