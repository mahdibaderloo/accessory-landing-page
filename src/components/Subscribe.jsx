import Logo from "../data/images/logo-light.svg";
import emailIcon from "../data/images/sms.svg";

function Subscribe() {
  return (
    <div className="text-zinc-50 w-[42%]">
      <div className="flex items-center">
        <img src={Logo} alt="icon" className="w-24" />
        <h3 className="text-2xl font-bold">Accessory</h3>
      </div>
      <p className="text-sm mt-4 text-zinc-200 pl-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum
        sapiente harum veniam reiciendis temporibus ratione ea alias, delectus!
      </p>
      <form action="" className="flex items-center gap-2 mt-6 pl-7">
        <div className="bg-zinc-200 text-zinc-800 flex items-center text-sm p-2 rounded-lg w-[500px]">
          <img src={emailIcon} alt="icon" className="w-5" />
          <input
            type="text"
            className="outline-none border-none pl-1 w-full"
            placeholder="Your email..."
          />
        </div>
        <button className="bg-zinc-200 text-zinc-800 p-1.5 rounded-lg laptop:cursor-pointer laptop:hover:bg-zinc-300 transition-all font-medium duration-200">
          Subscribe &rarr;
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
