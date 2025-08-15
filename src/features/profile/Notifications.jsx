import NotificationItem from "./NotificationItem";
import { useSelector } from "react-redux";

function Notifications() {
  const notifications = useSelector((state) => state.profile.notifications);

  return (
    <ul className="w-full laptop:w-[70%] p-4 laptop:p-0 laptop:m-8">
      {notifications?.map((notification) => (
        <NotificationItem notification={notification} key={notification.id} />
      ))}
    </ul>
  );
}

export default Notifications;
