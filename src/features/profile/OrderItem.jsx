function OrderItem({ order }) {
  const { orderId, itemsCount, totalPrice, description } = order;

  return (
    <li className="grid grid-cols-4 bg-zinc-200 divide-x-2 divide-zinc-100 text-sm laptop:text-md text-zinc-80 laptop:cursor-pointer">
      <p className="p-2 break-words">{orderId}</p>
      <p className="p-2 break-words">{itemsCount}</p>
      <p className="p-2 break-words">${totalPrice}</p>
      <p className="p-2 break-words">{description}</p>
    </li>
  );
}

export default OrderItem;
