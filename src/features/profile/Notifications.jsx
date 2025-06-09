import notificationIcon from "../../data/images/notification.svg";
import trashIcon from "../../data/images/trash.svg";

function Notifications() {
  return (
    <ul className="w-[70%] m-8">
      <li className="flex justify-between items-center bg-zinc-300 rounded-2xl p-3 mb-1 laptop:cursor-pointer">
        <div className="flex items-center">
          <img src={notificationIcon} alt="icon" className="w-8" />
          <p className="text-shadow-zinc-800 font-medium">Notification title</p>
        </div>
        <img src={trashIcon} alt="icon" className="w-6 laptop:cursor-pointer" />
      </li>
    </ul>
  );
}

export default Notifications;
