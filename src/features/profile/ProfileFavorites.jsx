import { useSelector } from "react-redux";
import editIcon from "../../data/images/edit.svg";
import trashIcon from "../../data/images/trash-red.svg";
import FavoriteItem from "./FavoriteItem";

function ProfileFavorites() {
  const user = useSelector((state) => state.profile.user);
  const items = JSON.parse(user[0].favorites);

  return (
    <div className="w-full h-screen laptop:w-[70%] p-2 laptop:p-0 laptop:m-8 overflow-hidden">
      <div>
        <div className="flex justify-end items-center gap-2">
          <img
            src={editIcon}
            alt="icon"
            className="w-3.5 laptop:w-5.5 laptop:cursor-pointer"
          />
          <img
            src={trashIcon}
            alt="icon"
            className="w-4 laptop:w-6 laptop:cursor-pointer"
          />
        </div>
      </div>
      <ul className="w-full flex justify-center gap-2 flex-wrap mt-4 p-2 overflow-y-scroll laptop:overflow-y-auto">
        {items.map((item) => (
          <FavoriteItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default ProfileFavorites;
