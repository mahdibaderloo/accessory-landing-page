import { useState } from "react";
import { Link } from "react-router-dom";

import loginImage from "../../data/images/login-image.png";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen bg-zinc-100 laptop:flex desktop:mx-auto desktop:bg-zinc-800 ">
      <section className="w-full p-2 bg-zinc-100 flex flex-col gap-6 justify-center items-center tablet:w-[500px] tablet:mx-auto desktop:w-[60%]">
        <img
          src={loginImage}
          alt=""
          className="w-40 laptop:hidden tablet:w-60 tablet:mt-8"
        />
        <form
          action=""
          className="w-full flex flex-col gap-3 desktop:w-[700px] desktop:shadow desktop:p-8 desktop:rounded-2xl"
        >
          <p className="hidden laptop:block font-bold text-5xl mb-5 mt-2 mx-auto text-zinc-800 tablet:text-6xl tablet:mb-8">
            Sign in
          </p>
          <div className="flex flex-col">
            <label
              className="text-sm mb-0.5 text-zinc-800 font-semibold tablet:text-lg"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-zinc-300 p-0.5 pl-2 outline-none rounded-md text-sm py-1 laptop:rounded-xl tablet:p-1 tablet:pl-3 tablet:text-lg"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-sm mb-0.5 text-zinc-800 font-semibold tablet:text-lg"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-300 p-0.5 pl-2 outline-none rounded-md text-sm py-1 laptop:rounded-xl tablet:p-1 tablet:pl-3 tablet:text-lg"
            />
          </div>
          <button className="mt-5 bg-zinc-800 w-20 mx-auto rounded-md laptop:rounded-2xl text-zinc-100 p-1 tablet:p-2.5 tablet:w-28 tablet:text-lg laptop:cursor-pointer">
            SIGN IN
          </button>
          <p className="mx-auto mt-2 text-sm text-zinc-500 tablet:text-lg">
            I don't have an account?{" "}
            <Link className="text-zinc-900" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
        <Link
          to="/"
          className="text-center leading-[30px] rounded-md font-barlow bg-zinc-500 hover:bg-zinc-800 text-zinc-100 transition-all duration-200 laptop:rounded-xl py-1 px-2 laptop:py-2 laptop:px-3 laptop:leading-[40px] desktop:mr-87"
        >
          &larr; Back to home
        </Link>
      </section>
      <section className="hidden w-[45%] h-screen bg-zinc-800 justify-center items-end laptop:flex">
        <img
          src={loginImage}
          alt=""
          className="laptop:w-[500px] desktop:w-[800px]"
        />
      </section>
    </div>
  );
}

export default LoginPage;
