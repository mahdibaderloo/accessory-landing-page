import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex">
      <section className="w-full grow h-screen bg-zinc-100">
        <form action="">
          <img src="" alt="" />
          <p>Sign in</p>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username..." />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email..." />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password..." />
          </div>
          <button>SIGN IN</button>
          <p>
            I don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </section>
      <section className="hidden w-[65%] h-screen bg-zinc-800"></section>
    </div>
  );
}

export default LoginPage;
