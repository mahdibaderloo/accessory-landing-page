import Logo from "../data/images/logo-light.svg";
import emailIcon from "../data/images/sms.svg";

function Subscribe() {
  return (
    <div className="text-zinc-50 tablet:w-[50%] mb-8">
      <div className="flex items-center justify-center pr-6 laptop:pr-0 laptop:justify-start">
        <img src={Logo} alt="icon" className="w-20 laptop:w-24" />
        <h3 className="text-lg laptop:text-2xl font-bold">Accessory</h3>
      </div>
      <p className="text-[14px] laptop:text-[16px] font-medium mt-4 text-zinc-200 p-2 text-center laptop:text-left laptop:pl-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos
        cumque dolore dolores id ratione sint, error consectetur nulla ad
        perspiciatis doloribus tempora minus nobis perferendis sit incidunt
        repudiandae veritatis modi reprehenderit optio excepturi! Obcaecati ut
        illo sequi necessitatibus corporis.
      </p>
      <form
        action=""
        className="flex justify-center items-center gap-2 mt-6 laptop:justify-start laptop:pl-7"
      >
        <div className="bg-zinc-100 text-zinc-800 flex items-center text-sm p-1 laptop:p-2 rounded-lg w-[90%] laptop:w-[300px] desktop:w-[500px]">
          <img src={emailIcon} alt="icon" className="w-5" />
          <input
            type="text"
            className="outline-none border-none pl-1 w-full text-[14px] laptop:text-[16px] desktop:text-sm autofill:bg-zinc-100 autofill:text-zinc-800"
            placeholder="Your email..."
          />
          <button className="bg-zinc-800 text-zinc-100 p-2 rounded-lg laptop:hidden active:bg-zinc-700 transition-all font-medium duration-200">
            &rarr;
          </button>
        </div>
        <button className="hidden laptop:block w-18 desktop:w-24 bg-zinc-100 laptop:text-[14px] desktop:text-sm text-zinc-800 px-1 h-[54px] rounded-lg laptop:cursor-pointer laptop:hover:bg-zinc-300 transition-all font-medium duration-200">
          Subscribe &rarr;
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
