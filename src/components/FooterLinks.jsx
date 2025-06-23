import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="w-[50%] flex gap-20 mr-10 justify-center">
      <div>
        <p className="text-zinc-50 text-lg font-semibold mb-3.5">Information</p>
        <ul className="flex flex-col gap-1.5">
          <li className="text-zinc-400 text-sm hover:text-zinc-100 transition-all duration-200">
            <Link to="/">Privacy Policy</Link>
          </li>
          <li className="text-zinc-400 text-sm hover:text-zinc-100 transition-all duration-200">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="text-zinc-400 text-sm hover:text-zinc-100 transition-all duration-200">
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-zinc-50 text-lg font-semibold mb-3.5">Account</p>
        <ul className="flex flex-col gap-1.5">
          <li className="text-zinc-400 text-sm hover:text-zinc-100 transition-all duration-200">
            <Link to="/profile">Dashboard</Link>
          </li>
          <li className="text-zinc-400 text-sm hover:text-zinc-100 transition-all duration-200">
            <Link to="/profile/orders">My Orders</Link>
          </li>
          <li className="text-zinc-400 text-sm hover:text-zinc-100 transition-all duration-200">
            <Link to="/cart">Shopping Cart</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-zinc-50 text-lg font-semibold mb-3.5">Category</p>
        <ul className="flex flex-col gap-1.5">
          <li className="text-zinc-400 text-sm hover:text-zinc-100 transition-all duration-200">
            <Link to="/">Rings</Link>
          </li>
          <li className="text-zinc-400 text-sm hover:text-zinc-100 transition-all duration-200">
            <Link to="/contact-us">Necklace</Link>
          </li>
          <li className="text-zinc-400 text-sm hover:text-zinc-100 transition-all duration-200">
            <Link to="/">Watches</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks;
