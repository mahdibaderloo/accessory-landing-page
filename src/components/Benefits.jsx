import deliveryIcon from "../data/images/delivery.svg";
import supportIcon from "../data/images/support.svg";
import discountIcon from "../data/images/discount.svg";

function Benefits() {
  return (
    <div className="w-full flex justify-center flex-wrap gap-8 bg-zinc-50 p-8">
      <div className="flex justify-center items-center text-sm font-bold text-zinc-800">
        <img src={deliveryIcon} alt="icon" className="w-16" />
        <p>Fast Delivery</p>
      </div>
      <div className="flex justify-center items-center text-sm font-bold text-zinc-800">
        <img src={supportIcon} alt="icon" className="w-14" />
        <p>24-hour Support</p>
      </div>
      <div className="flex justify-center items-center text-sm font-bold text-zinc-800">
        <img src={discountIcon} alt="icon" className="w-16" />
        <p>10% Discount On Purchases</p>
      </div>
    </div>
  );
}

export default Benefits;
