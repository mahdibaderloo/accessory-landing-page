import Select from "../../components/Select";
import EmptyHeartIcon from "../../data/images/heart.svg";
import FillHeartIcon from "../../data/images/heart-fill.svg";

function ProductOptions() {
  const sizes = new Array(11).fill(30).map((n, i) => n + i);
  const colors = ["Black", "White", "Red", "Yellow", "Blue", "Purple", "Gray"];

  return (
    <form>
      <div>
        <Select options={sizes} />
        <Select options={colors} />
      </div>
      <button>Add to cart</button>
      <div>
        <img src={EmptyHeartIcon} alt="" />
        <p>Add to favorites</p>
      </div>
    </form>
  );
}

export default ProductOptions;
