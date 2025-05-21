import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="tablet:bg-zinc-100 laptop:flex desktop:mx-auto desktop:bg-zinc-800 ">
      <section className="w-full h-screen p-2 bg-zinc-100 flex justify-center items-center tablet:w-[500px] tablet:mx-auto desktop:w-[60%]">
        <form
          action=""
          className="w-full flex flex-col gap-3 desktop:w-[700px] desktop:shadow desktop:p-8 desktop:rounded-2xl"
        >
          <p className="font-bold text-5xl mb-5 mt-2 mx-auto text-zinc-800 tablet:text-6xl tablet:mb-8">
            Sign up
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-300 p-0.5 pl-2 outline-none tablet:p-1 tablet:pl-3 tablet:text-lg"
            />
          </div>
          <button className="mt-5 bg-zinc-800 w-20 mx-auto rounded-full text-zinc-100 p-1 tablet:p-2.5 tablet:w-28 tablet:text-lg laptop:cursor-pointer">
            SIGN UP
          </button>
          <p className="mx-auto mt-2 text-sm text-zinc-500 tablet:text-lg">
            I have an account?{" "}
            <Link className="text-zinc-900" to="/login">
              Sign in
            </Link>
          </p>
        </form>
      </section>
      <section className="hidden w-[45%] h-screen bg-zinc-800 justify-center items-end laptop:flex">
        <img
          src="../../../public/accessory-shopping-cart.png"
          alt=""
          className="w-96 h-90 desktop:absolute desktop:w-[800px] desktop:h-[760px] desktop:left-[50%]"
        />
      </section>
    </div>
  );
}

export default Signup;
