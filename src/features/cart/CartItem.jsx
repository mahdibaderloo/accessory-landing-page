function CartItem() {
  return (
    <li className="w-full bg-zinc-50 flex justify-between items-center rounded-lg shadow p-2 mb-2">
      <div className="flex items-center gap-4">
        <img src="" alt="product" className="h-full w-10" />
        <div>
          <p className="text-lg font-medium tracking-wide">title</p>
          <p className="tracking-wide">21$</p>
        </div>
      </div>
      <div className="bg-zinc-700 rounded-md w-12 text-zinc-100 px-1.5 flex items-center justify-between">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </li>
  );
}

export default CartItem;
