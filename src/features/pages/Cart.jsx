import CartItem from "../cart/CartItem";

function Cart() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <ul className="h-[60%] rounded-lg mt-13 p-2 overflow-x-hidden overflow-y-scroll">
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
      <div className="">
        <div>
          <p>Subtotal:</p>
          <p>$146</p>
        </div>
        <div>
          <p>Delivery:</p>
          <p>$15</p>
        </div>
        <div>
          <p>Total</p>
          <p>$161</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
