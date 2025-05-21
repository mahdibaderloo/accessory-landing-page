import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="tablet:bg-zinc-100">
      <section className="w-full h-screen p-2 bg-zinc-100 flex justify-center items-center tablet:w-[500px] tablet:mx-auto">
        <form action="" className="w-full flex flex-col gap-3">
          <p className="font-bold text-5xl mb-5 mt-2 mx-auto text-zinc-800 tablet:text-6xl tablet:mb-8">
            Sign in
          </p>
          <div className="flex flex-col">
            <label
              className="text-sm mb-0.5 text-zinc-800 tablet:text-lg"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username..."
              className="bg-zinc-300 p-0.5 pl-2 outline-none tablet:p-1 tablet:pl-3 tablet:text-lg"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-sm mb-0.5 text-zinc-800 tablet:text-lg"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email..."
              className="bg-zinc-300 p-0.5 pl-2 outline-none tablet:p-1 tablet:pl-3 tablet:text-lg"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-sm mb-0.5 text-zinc-800 tablet:text-lg"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password..."
              className="bg-zinc-300 p-0.5 pl-2 outline-none tablet:p-1 tablet:pl-3 tablet:text-lg"
            />
          </div>
          <button className="mt-5 bg-zinc-800 w-20 mx-auto rounded-full text-zinc-100 p-1 tablet:p-2.5 tablet:w-28 tablet:text-lg">
            SIGN IN
          </button>
          <p className="mx-auto mt-2 text-sm text-zinc-500 tablet:text-lg">
            I don't have an account?{" "}
            <Link className="text-zinc-900" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </section>
      <section className="hidden w-[65%] h-screen bg-zinc-800">
        <img src="../../../public/accessory-shopping-cart.png" alt="" />
      </section>
    </div>
  );
}

export default LoginPage;
