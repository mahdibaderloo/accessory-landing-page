import Select from "../../components/Select";
import EmptyHeartIcon from "../../data/images/heart.svg";
import FillHeartIcon from "../../data/images/heart-fill.svg";

function ProductOptions() {
  const sizes = new Array(11).fill(30).map((n, i) => n + i);
  const colors = ["Black", "White", "Red", "Yellow", "Blue", "Purple", "Gray"];

  return (
    <form className="w-full p-2">
      <div className="flex items-center gap-1 mb-4">
        <img src={EmptyHeartIcon} alt="" className="w-5" />
        <p className="text-zinc-800 text-[20px]">Add to favorites</p>
      </div>
      <div className="w-full flex gap-2">
        <Select options={sizes} />
        <Select options={colors} />
      </div>
      <button className="w-full bg-zinc-600 text-zinc-50 mt-2 py-1 hover:bg-zinc-700 transition-all duration-200">
        Add to cart
      </button>
    </form>
  );
}

export default ProductOptions;
