import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Notification() {
  const params = useParams();
  const notifications = useSelector((state) => state.profile.notifications);
  const notification = notifications?.filter(
    (notification) => notification.id === params.notificationId
  );

  const { title, description, created_at } = notification[0];

  return (
    <div className="w-full laptop:w-[70%] p-4 laptop:p-0 laptop:m-8">
      <Link
        to={-1}
        className="text-center leading-[30px] rounded-md font-barlow bg-zinc-500 hover:bg-zinc-800 text-zinc-100 transition-all duration-200 laptop:rounded-xl py-1 px-2 laptop:py-2 laptop:px-3 laptop:leading-[40px] desktop:mr-87"
      >
        &larr; Back
      </Link>
      <div className="flex flex-col gap-6 mt-8 bg-zinc-50 h-fit p-4 rounded-lg laptop:rounded-2xl shadow">
        <h3 className="text-3xl font-medium text-zinc-800">{title}</h3>
        <div
          className="text-zinc-700 font-medium mb-8 flex"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
        <span className="mt-auto text-sm text-zinc-700">{`${created_at.slice(
          0,
          10
        )} - ${created_at.slice(11, 19)}`}</span>
      </div>
    </div>
  );
}

export default Notification;
