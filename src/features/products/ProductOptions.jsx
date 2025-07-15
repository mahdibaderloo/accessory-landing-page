import Select from "../../components/Select";
import EmptyHeartIcon from "../../data/images/heart.svg";
import FillHeartIcon from "../../data/images/heart-fill.svg";
import { useDispatch, useSelector } from "react-redux";
import { chooseColor, chooseSize } from "./productSlice";
import { addItem } from "../cart/cartSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchUser } from "../../helpers/helper";

function ProductOptions({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [userData, setUserData] = useState(null);

  const size = useSelector((state) => state.product.size);
  const color = useSelector((state) => state.product.color);
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.profile.user);

  const dispatch = useDispatch();

  const { id, name, price, description } = product;

  useEffect(() => {
    async function fetch() {
      if (user?.user) {
        const userApi = await fetchUser(user.user);
        console.log(userApi);
        setUserData(userApi);
      }
    }
    fetch();
  }, [user]);

  useEffect(
    function () {
      if (userData?.[0]?.favorites?.find((item) => item.id === id))
        setIsFavorite(true);
    },
    [userData, id]
  );

  const sizes = new Array(11).fill(30).map((n, i) => n + i);
  const colors = ["Black", "White", "Red", "Yellow", "Blue", "Purple", "Gray"];

  function handleAddToCart(e) {
    e.preventDefault();

    const newItem = {
      id,
      name,
      price,
      description,
      size,
      color,
      count: 1,
      totalPrice: price * 1,
    };

    if (!cart.find((item) => item.id === id)) {
      dispatch(addItem(newItem));
      toast.success(`${name} added to cart`);
    }
  }

  function handleAddToFavorites() {
    setIsFavorite(true);
  }

  function handleRemoveFromFavorites() {
    setIsFavorite(false);
  }

  return (
    <form className="w-full p-2 tablet:w-[70%] tablet:mx-auto laptop:mx-0 laptop:p-0 laptop:mt-4 laptop:w-full">
      {isFavorite ? (
        <div
          className="flex items-center gap-1 mb-4 bg-zinc-200 w-fit px-2 py-1.5 laptop:px-3 laptop:cursor-pointer hover:bg-zinc-300 transition-all duration-200"
          onClick={handleAddToFavorites}
        >
          <img src={FillHeartIcon} alt="" className="w-5" />
          <p className=" text-zinc-800 text-sm tablet:text-[24px] laptop:text-lg">
            Remove from favorites
          </p>
        </div>
      ) : (
        <div
          className="flex items-center gap-1 mb-4 bg-zinc-200 w-fit px-2 py-1.5 laptop:px-3 laptop:cursor-pointer hover:bg-zinc-300 transition-all duration-200"
          onClick={handleRemoveFromFavorites}
        >
          <img src={EmptyHeartIcon} alt="" className="w-5" />
          <p className=" text-zinc-800 text-sm tablet:text-[24px] laptop:text-lg">
            Add to favorites
          </p>
        </div>
      )}
      <div className="w-full flex gap-2">
        <Select
          options={sizes}
          value={size}
          onChange={(e) => dispatch(chooseSize(e.target.value))}
        />
        <Select
          options={colors}
          value={color}
          onChange={(e) => dispatch(chooseColor(e.target.value))}
        />
      </div>
      <button
        className="w-full bg-zinc-600 text-zinc-50 mt-2 py-1 hover:bg-zinc-700 transition-all duration-200 laptop:text-xl laptop:py-2 laptop:cursor-pointer"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </form>
  );
}

export default ProductOptions;
