import Select from "../../components/Select";
import EmptyHeartIcon from "../../data/images/heart.svg";
import FillHeartIcon from "../../data/images/heart-fill.svg";
import { useDispatch, useSelector } from "react-redux";
import { chooseColor, chooseSize } from "./productSlice";
import { addToFavorites, removeFromFavorites } from "../profile/profileSlice";
import { addItem } from "../cart/cartSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import MiniLoader from "../../components/MiniLoader";

function ProductOptions({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const size = useSelector((state) => state.product.size);
  const color = useSelector((state) => state.product.color);
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.profile.user);
  const favorites = useSelector((state) => state.profile.favorites);
  const status = useSelector((state) => state.profile.status);
  const isLoading = status === "loading";

  const isItemInCart = cart.find((item) => item.id === product.id)
    ? true
    : false;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, name, price, description } = product;

  useEffect(
    function () {
      if (Array.isArray(favorites)) {
        const isInFavorites = favorites.find((item) => item.id === id);
        setIsFavorite(!!isInFavorites);
      } else {
        setIsFavorite(false);
      }
    },
    [id, favorites]
  );

  const sizes = new Array(11).fill(30).map((n, i) => n + i);
  const colors = ["Black", "White", "Red", "Yellow", "Blue", "Purple", "Gray"];

  function loginFirst() {
    toast.error("Please login first");
    navigate("/login");
  }

  function handleAddToCart(e) {
    e.preventDefault();
    if (user === null) return;

    if (!user || user.length < 1) {
      loginFirst();
    } else {
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
  }

  function handleRemoveFromCart(e) {
    e.preventDefault();
    if (user === null) return;

    if (!user || user.length < 1) {
      loginFirst();
    } else {
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
  }

  function handleAddToFavorites() {
    if (user === null) return;

    if (!user || user.length < 1) {
      loginFirst();
    } else {
      if (!favorites.find((item) => item.id === id)) {
        dispatch(addToFavorites({ item: product, id: user?.[0]?.id }))
          .unwrap()
          .then(() => {
            setIsFavorite(true);
          });
      }
    }
  }

  function handleRemoveFromFavorites() {
    const userId = user?.[0]?.id;
    if (favorites.find((item) => item.id === id)) {
      dispatch(removeFromFavorites({ itemId: id, userId }))
        .unwrap()
        .then(() => {
          setIsFavorite(false);
        });
    }
  }

  return (
    <form className="w-full p-2 tablet:w-[70%] tablet:mx-auto laptop:mx-0 laptop:p-0 laptop:mt-4 laptop:w-full">
      {isFavorite ? (
        <div
          className="flex items-center gap-1 mb-4 bg-zinc-200 w-fit px-2 py-1.5 laptop:px-3 laptop:cursor-pointer hover:bg-zinc-300 transition-all duration-200"
          onClick={handleRemoveFromFavorites}
        >
          <img src={FillHeartIcon} alt="" className="w-5" />
          <div className=" text-zinc-800 text-sm tablet:text-[24px] laptop:text-lg">
            {isLoading ? (
              <MiniLoader color="bg-zinc-800" />
            ) : (
              <p>Remove from favorites</p>
            )}
          </div>
        </div>
      ) : (
        <div
          className="flex items-center gap-1 mb-4 bg-zinc-200 w-fit px-2 py-1.5 laptop:px-3 laptop:cursor-pointer hover:bg-zinc-300 transition-all duration-200"
          onClick={handleAddToFavorites}
        >
          <img src={EmptyHeartIcon} alt="" className="w-5" />
          <div className=" text-zinc-800 text-sm tablet:text-[24px] laptop:text-lg">
            {isLoading ? (
              <MiniLoader color="bg-zinc-800" />
            ) : (
              <p>Add to favorites</p>
            )}
          </div>
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
      {isItemInCart ? (
        <button
          className="w-full bg-zinc-600 text-zinc-50 mt-2 py-1 hover:bg-zinc-700 transition-all duration-200 laptop:text-xl laptop:py-2 laptop:cursor-pointer"
          onClick={handleRemoveFromCart}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="w-full bg-zinc-600 text-zinc-50 mt-2 py-1 hover:bg-zinc-700 transition-all duration-200 laptop:text-xl laptop:py-2 laptop:cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      )}
    </form>
  );
}

export default ProductOptions;
