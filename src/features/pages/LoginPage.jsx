import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginImage from "../../data/images/login-image.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../profile/profileSlice";
import MiniLoader from "../../components/MiniLoader";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const status = useSelector((state) => state.profile.status);
  const isLoading = status === "loading";

  async function handleLogin(e) {
    e.preventDefault();

    if (
      /.+@(gmail|yahoo)(\.com)/.test(email.trim()) &&
      password.trim().length > 7
    ) {
      const result = await dispatch(login({ email, password, navigate }));
      if (login.fulfilled.match(result)) {
        navigate("/profile");
      }
    }
  }

  return (
    <div className="h-screen bg-zinc-100 laptop:flex desktop:mx-auto desktop:bg-zinc-800 ">
      <section className="w-full h-screen p-2 bg-zinc-50 flex flex-col gap-6 justify-center items-center tablet:w-[500px] tablet:mx-auto desktop:w-[60%]">
        <img
          src={loginImage}
          alt=""
          className="w-50 laptop:hidden tablet:w-60 tablet:mt-8"
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
              className="text-md mb-2 text-zinc-800 font-semibold tablet:text-lg"
              htmlFor="username"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-100 shadow p-0.5 pl-2 outline-none rounded-md text-md py-2 laptop:rounded-xl tablet:p-1 tablet:pl-3 tablet:text-lg"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-md mb-2 text-zinc-800 font-semibold tablet:text-lg"
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
              className="bg-zinc-100 shadow p-0.5 pl-2 outline-none rounded-md text-md py-2 laptop:rounded-xl tablet:p-1 tablet:pl-3 tablet:text-lg"
            />
          </div>
          <button
            className="mt-5 bg-zinc-800 font-medium w-28 mx-auto rounded-md laptop:rounded-2xl text-zinc-100 p-2 tablet:p-3 tablet:w-28 tablet:text-lg laptop:cursor-pointer"
            onClick={handleLogin}
          >
            {isLoading ? <MiniLoader /> : "SIGN IN"}
          </button>
          <p className="mx-auto mt-2 text-sm text-zinc-500 tablet:text-lg">
            I don't have an account?{" "}
            <Link className="text-zinc-900 font-medium" to="/signup">
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
