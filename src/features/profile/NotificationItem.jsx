import notificationIcon from "../../data/images/notification.svg";
import trashIcon from "../../data/images/trash.svg";

function NotificationItem() {
  function handleOpenNotification() {}

  return (
    <li
      className="flex justify-between items-center bg-zinc-300 rounded-lg laptop:rounded-2xl p-1.5 laptop:p-3 mb-1 laptop:cursor-pointer"
      onClick={handleOpenNotification}
    >
      <div className="flex items-center">
        <img src={notificationIcon} alt="icon" className="w-6 laptop:w-8" />
        <p className="text-zinc-800 text-sm laptop:text-lg font-medium">
          Notification title
        </p>
      </div>
      <img
        src={trashIcon}
        alt="icon"
        className="w-5 laptop:w-6 laptop:cursor-pointer"
      />
    </li>
  );
}

export default NotificationItem;
