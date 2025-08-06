import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { showCategoryItems } from "../features/products/categorySlice";

function FooterLinks() {
  const dispatch = useDispatch();
  const [SearchParams, setSearchParams] = useSearchParams();

  function handleClick(category) {
    console.log(category);
    dispatch(showCategoryItems(category));

    SearchParams.set("category", category);
    setSearchParams(SearchParams);
  }

  return (
    <div className="w-full tablet:w-[50%] flex flex-col items-center laptop:flex-row gap-10 desktop:gap-20 laptop:mr-10 justify-center">
      <div>
        <p className="text-zinc-50 text-center text-[20px] desktop:text-lg font-semibold mb-3.5">
          Information
        </p>
        <ul className="flex flex-col items-center justify-center gap-1.5 text-[16px] desktop:text-sm">
          <li className="text-zinc-400 hover:text-zinc-100 transition-all duration-200">
            <Link to="/">Privacy Policy</Link>
          </li>
          <li className="text-zinc-400 hover:text-zinc-100 transition-all duration-200">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="text-zinc-400 hover:text-zinc-100 transition-all duration-200">
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-zinc-50 text-center text-[20px] desktop:text-lg font-semibold mb-3.5">
          Account
        </p>
        <ul className="flex flex-col items-center justify-center gap-1.5 text-[16px] desktop:text-sm">
          <li className="text-zinc-400 hover:text-zinc-100 transition-all duration-200">
            <Link to="/profile">Dashboard</Link>
          </li>
          <li className="text-zinc-400 hover:text-zinc-100 transition-all duration-200">
            <Link to="/profile/orders">My Orders</Link>
          </li>
          <li className="text-zinc-400 hover:text-zinc-100 transition-all duration-200">
            <Link to="/cart">Shopping Cart</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-zinc-50 text-center text-[20px] desktop:text-lg font-semibold mb-3.5">
          Category
        </p>
        <ul className="flex flex-col items-center justify-center gap-1.5 text-[16px] desktop:text-sm">
          <li className="text-zinc-400 hover:text-zinc-100 transition-all duration-200">
            <Link
              onClick={() => handleClick("Rings")}
              to="/products?category=Rings"
            >
              Rings
            </Link>
          </li>
          <li className="text-zinc-400 hover:text-zinc-100 transition-all duration-200">
            <Link
              onClick={() => handleClick("Necklaces")}
              to="/products?category=Necklaces"
            >
              Necklace
            </Link>
          </li>
          <li className="text-zinc-400 hover:text-zinc-100 transition-all duration-200">
            <Link
              onClick={() => handleClick("Watches")}
              to="/products?category=Watches"
            >
              Watches
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks;
