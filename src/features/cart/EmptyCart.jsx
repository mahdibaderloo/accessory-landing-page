import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <p className="text-4xl font-semibold">Cart is empty!</p>
      <Link
        to="/products"
        className="bg-zinc-800 py-1 px-2 rounded-md text-zinc-100 hover:bg-zinc-600 transition-all duration-200"
      >
        Back to shop
      </Link>
    </div>
  );
}

export default EmptyCart;
