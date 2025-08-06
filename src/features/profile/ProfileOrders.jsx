import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

function ProfileOrders() {
  const user = useSelector((state) => state.profile.user);
  const status = useSelector((state) => state.profile.status);

  if (!user || status === "loading") return <Loader />;

  const { orders } = user[0];

  return (
    <div className="w-[95%] laptop:w-[70%] m-1 mx-auto laptop:m-8 rounded-sm laptop:rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="grid grid-cols-4 bg-zinc-800 divide-x-2 divide-zinc-100 text-zinc-100 text-sm laptop:text-md desktop:text-lg laptop:font-semibold border-b-4 border-y-zinc-100">
            <p className="p-1 laptop:p-2 ">Order ID</p>
            <p className="p-1 laptop:p-2 ">Products Count</p>
            <p className="p-1 laptop:p-2 ">Price</p>
            <p className="p-1 laptop:p-2 ">Desc</p>
          </div>
          <ul className="divide-y-1 divide-zinc-800">
            {JSON.parse(orders)
              .reverse()
              .map((order) => (
                <OrderItem order={order} key={order.orderId} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileOrders;
