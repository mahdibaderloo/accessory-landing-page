import { useSelector } from "react-redux";

import checkIcon from "../../data/images/check.svg";

function Checkout() {
  const user = useSelector((state) => state.profile.user);

  if (!user) return <Loader />;

  const { name: nameApi, mobile: mobileApi, address: addressApi } = user[0];

  return (
    <form className="mt-16 p-4 border border-zinc-300 shadow rounded-xl">
      <div className="flex items-center gap-2 border-b border-b-zinc-500 w-fit pb-2 mb-8">
        <img src={checkIcon} alt="" className="w-7" />
        <p className="font-semibold text-xl text-zinc-800">
          Please complete the information below
        </p>
      </div>
      <div className="py-3 flex flex-col laptop:flex-row justify-between border-b border-b-zinc-200">
        <label htmlFor="username" className="font-medium text-zinc-800">
          Name
        </label>
        <input
          type="text"
          id="username"
          placeholder="your name"
          defaultValue={nameApi}
          className="outline-none border-none w-1/2 bg-zinc-50 p-1 rounded-lg"
        />
      </div>
      <div className="py-3 flex flex-col laptop:flex-row justify-between border-b border-b-zinc-200">
        <label htmlFor="mobile" className="font-medium text-zinc-800">
          Mobile number
        </label>
        <input
          type="text"
          id="mobile"
          placeholder="Add number"
          defaultValue={`+98 ${mobileApi || ""}`}
          className="outline-none border-none w-1/2 bg-zinc-50 p-1 rounded-lg"
        />
      </div>
      <div className="py-2 flex flex-col laptop:flex-row justify-between">
        <label htmlFor="address" className="font-medium text-zinc-800">
          Address
        </label>

        <textarea
          id="address"
          placeholder="Iran..."
          dir="ltr"
          defaultValue={addressApi}
          className="outline-none border-none w-1/2 bg-zinc-50 p-1 rounded-lg"
        ></textarea>
      </div>
      <div className="py-2 flex flex-col gap-4 laptop:flex-row justify-end">
        <button className="bg-emerald-600 text-white px-3 py-1 rounded-sm hover:bg-emerald-700 transition-all duration-200 cursor-pointer">
          Save and pay
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded-sm hover:bg-red-600 transition-all duration-200 cursor-pointer">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Checkout;
