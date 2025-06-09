function ProfileOrders() {
  return (
    <div className="w-[70%] m-8 rounded-3xl overflow-hidden">
      <div className="grid grid-cols-4 bg-zinc-800 divide-x-2 divide-zinc-100 text-zinc-100 font-semibold border-b-4 border-y-zinc-100">
        <p className="p-2 ">Order ID</p>
        <p className="p-2 ">Products Count</p>
        <p className="p-2 ">Price</p>
        <p className="p-2 ">Desc</p>
      </div>
      <ul className="divide-y-1 divide-zinc-800">
        <li className="grid grid-cols-4 bg-zinc-200 divide-x-2 divide-zinc-100 text-zinc-80 laptop:cursor-pointer">
          <p className="p-2 ">498203hj398</p>
          <p className="p-2 ">2</p>
          <p className="p-2 ">$1200</p>
          <p className="p-2 ">For my parents</p>
        </li>
      </ul>
    </div>
  );
}

export default ProfileOrders;
