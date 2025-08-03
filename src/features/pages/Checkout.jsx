import { useSelector } from "react-redux";

import checkIcon from "../../data/images/check.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const user = useSelector((state) => state.profile.user);

  const navigate = useNavigate();

  useEffect(
    function () {
      if (isCheck) myInformation();
      else otherInformation();
    },
    [isCheck]
  );

  if (!user) return <Loader />;

  const { name: nameApi, mobile: mobileApi, address: addressApi } = user[0];
  console.log(mobileApi);

  function myInformation() {
    setName(nameApi);
    setMobile(mobileApi);
    setAddress(addressApi);
  }

  function otherInformation() {
    setName("");
    setMobile("");
    setAddress("");
  }

  function handleCancel() {
    navigate("/cart");
  }

  return (
    <form className="mt-16 p-4 border border-zinc-300 shadow rounded-xl">
      <div className="flex items-center gap-2 border-b border-b-zinc-500 w-fit pb-2 mb-8">
        <img src={checkIcon} alt="" className="w-7" />
        <p className="font-semibold text-xl text-zinc-800">
          Please complete the information below
        </p>
      </div>
      <div className="py-3 flex items-center flex-col laptop:flex-row justify-between border-b border-b-zinc-200">
        <label htmlFor="username" className="font-medium text-zinc-800">
          Name
        </label>
        <input
          type="text"
          id="username"
          placeholder="your name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-none border-none w-1/2 bg-zinc-50 p-2 rounded-lg"
        />
      </div>
      <div className="py-3 flex items-center flex-col laptop:flex-row justify-between border-b border-b-zinc-200">
        <label htmlFor="mobile" className="font-medium text-zinc-800">
          Mobile number
        </label>
        <input
          type="text"
          id="mobile"
          placeholder="Add number"
          defaultValue={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="outline-none border-none w-1/2 bg-zinc-50 p-2 rounded-lg"
        />
      </div>
      <div className="py-3 flex items-center flex-col laptop:flex-row justify-between border-b border-b-zinc-200">
        <label htmlFor="description" className="font-medium text-zinc-800">
          Description
        </label>
        <input
          type="text"
          id="description"
          placeholder="Description..."
          defaultValue={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="outline-none border-none w-1/2 bg-zinc-50 p-2 rounded-lg"
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
          defaultValue={address}
          onChange={(e) => setAddress(e.target.value)}
          className="outline-none border-none w-1/2 bg-zinc-50 p-1 rounded-lg"
        ></textarea>
      </div>
      <div className="flex items-center gap-1 text-zinc-800 hover:text-zinc-900 transition-all duration-200 cursor-pointer">
        <input
          type="checkbox"
          id="check"
          className="cursor-pointer scale-150 accent-zinc-800"
          onChange={() => setIsCheck((check) => !check)}
        />
        <label htmlFor="check" className="cursor-pointer font-medium">
          Use my information
        </label>
      </div>
      <div className="py-2 flex flex-col gap-4 laptop:flex-row justify-end">
        <button className="bg-emerald-600 text-white px-3 py-1 rounded-sm hover:bg-emerald-700 transition-all duration-200 cursor-pointer">
          Save and pay
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-sm hover:bg-red-600 transition-all duration-200 cursor-pointer"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Checkout;
