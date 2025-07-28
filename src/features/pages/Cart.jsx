import { useNavigate } from "react-router-dom";
import CartItem from "../cart/CartItem";
import EmptyCart from "../cart/EmptyCart";
import { useSelector } from "react-redux";

function Cart() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cart);
  const isEmpty = useSelector((state) => state.cart.isEmpty);

  const deliveryPrice = 15;
  const subTotal = cartItems
    .reduce((acc, cur) => acc + cur.totalPrice, 0)
    .toFixed(2);

  const total = (Number(subTotal) + deliveryPrice).toFixed(2);

  return (
    <div className="w-full flex flex-col">
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <>
          <ul className="h-[60%] rounded-lg mt-13 p-2 laptop:p-3 desktop:p-10 laptop:h-[65vh] laptop:overflow-y-scroll">
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
          <div className="flex flex-col p-4 text-zinc-700 laptop:text-xl laptop:p-6 laptop:mt-1">
            <div className="flex justify-between laptop:pb-2">
              <p>Subtotal:</p>
              <p>${subTotal}</p>
            </div>
            <div className="flex justify-between border-zinc-800 border-b-2 pb-2.5 laptop:pb-3">
              <p>Delivery:</p>
              <p>${deliveryPrice}</p>
            </div>
            <div className="flex justify-between text-zinc-900 font-semibold mt-2 laptop:text-2xl">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>
          <button
            className="bg-zinc-800 w-24 h-8 rounded-md text-zinc-100 mx-auto mb-4 mt-2 laptop:cursor-pointer laptop:w-40 laptop:h-12 laptop:rounded-xl laptop:text-2xl hover:bg-zinc-700 transition-all duration-200"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
