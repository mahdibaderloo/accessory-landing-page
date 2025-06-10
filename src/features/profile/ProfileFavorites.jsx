import ProductItem from "../products/ProductItem";
import editIcon from "../../data/images/edit.svg";
import trashIcon from "../../data/images/trash-red.svg";

function ProfileFavorites() {
  return (
    <div className="w-[70%] m-8">
      <div>
        <div className="flex justify-end items-center gap-2">
          <img
            src={editIcon}
            alt="icon"
            className="w-5.5 laptop:cursor-pointer"
          />
          <img
            src={trashIcon}
            alt="icon"
            className="w-6 laptop:cursor-pointer"
          />
        </div>
      </div>
      <ul className="w-full flex gap-2 flex-wrap mt-4 ">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ul>
    </div>
  );
}

export default ProfileFavorites;
