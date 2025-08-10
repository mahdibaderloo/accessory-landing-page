import { useLoaderData } from "react-router-dom";
import { getNotifications } from "../../services/apiNotifications";
import NotificationItem from "./notificationItem";

function Notifications() {
  const notifications = useLoaderData();
  console.log(notifications);

  return (
    <ul className="w-[95%] h-screen mx-auto laptop:mx-8 laptop:w-[70%] m-8">
      <NotificationItem />
    </ul>
  );
}

export async function loader() {
  const notifications = await getNotifications();
  return notifications;
}

export default Notifications;
