import CartItem from "../cart/CartItem";

function Cart() {
  return (
    <div className="w-full flex flex-col">
      <ul className="h-[60%] rounded-lg mt-13 p-2">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
      <div className="flex flex-col p-4 text-zinc-700">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>$146</p>
        </div>
        <div className="flex justify-between border-zinc-800 border-b-2 pb-2.5">
          <p>Delivery:</p>
          <p>$15</p>
        </div>
        <div className="flex justify-between text-zinc-900 font-semibold mt-2">
          <p>Total</p>
          <p>$161</p>
        </div>
      </div>
      <button className="bg-zinc-800 w-24 h-8 rounded-md text-zinc-100 mx-auto mb-4 mt-2 laptop:cursor-pointer">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
