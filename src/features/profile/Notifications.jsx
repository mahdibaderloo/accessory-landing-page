import NotificationItem from "./notificationItem";
import { useSelector } from "react-redux";

function Notifications() {
  const notifications = useSelector((state) => state.profile.notifications);

  return (
    <ul className="w-[95%] h-screen mx-auto laptop:mx-8 laptop:w-[70%] m-8">
      {notifications?.map((notification) => (
        <NotificationItem notification={notification} key={notification.id} />
      ))}
    </ul>
  );
}

export default Notifications;
