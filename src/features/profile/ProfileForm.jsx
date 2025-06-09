import pencilIcon from "../../data/images/pencil.svg";

function ProfileForm() {
  return (
    <form action="" className="w-[70%] m-8">
      <section className="w-full flex gap-6 items-center border-zinc-300 border-b-2 pb-4">
        <div className="relative">
          <img src="" alt="userImage" className="w-17 h-17 rounded-full" />
          <label
            htmlFor="changeImage"
            className="bg-white w-5 h-5 flex justify-center items-center rounded-full shadow-sm absolute bottom-0 left-13 z-20 laptop:cursor-pointer"
          >
            <img src={pencilIcon} alt="pencil" className="w-3.5" />
          </label>
          <input
            type="file"
            accept="Image/*"
            id="changeImage"
            className="hidden"
          />
        </div>
        <div className="text-lg">
          <p className="font-semibold tracking-wide text-zinc-800">Username</p>
          <p className="text-zinc-600">user@gmail.com</p>
        </div>
      </section>
      <section className="flex flex-col mt-4 divide-y divide-zinc-200">
        <div className="py-2 flex justify-between">
          <label htmlFor="username" className="font-medium text-zinc-800">
            Name
          </label>
          <input
            type="text"
            id="username"
            placeholder="your name"
            className="outline-none border-none w-1/2"
          />
        </div>
        <div className="py-2 flex justify-between">
          <label htmlFor="email" className="font-medium text-zinc-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="yourname@gmail.com"
            className="outline-none border-none w-1/2"
          />
        </div>
        <div className="py-2 flex justify-between">
          <label htmlFor="mobile" className="font-medium text-zinc-800">
            Mobile number
          </label>
          <input
            type="text"
            id="mobile"
            placeholder="Add number"
            className="outline-none border-none w-1/2"
          />
        </div>
        <div className="py-2 flex justify-between">
          <label htmlFor="password" className="font-medium text-zinc-800">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="########"
            className="outline-none border-none w-1/2"
          />
        </div>
        <div className="py-2 flex justify-between">
          <label htmlFor="address" className="font-medium text-zinc-800">
            Address
          </label>

          <textarea
            id="address"
            placeholder="Iran"
            dir="ltr"
            className="outline-none border-none w-1/2"
          ></textarea>
        </div>
      </section>
    </form>
  );
}

export default ProfileForm;
