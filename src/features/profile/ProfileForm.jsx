import { useDispatch, useSelector } from "react-redux";

import pencilIcon from "../../data/images/pencil.svg";
import Loader from "../../components/Loader";
import {
  changeAddress,
  changeEmail,
  changeMobile,
  changeName,
  uploadUserAvatar,
} from "./profileSlice";
import toast from "react-hot-toast";

function ProfileForm() {
  const user = useSelector((state) => state.profile.user);
  const status = useSelector((state) => state.profile.status);
  const dispatch = useDispatch();

  if (!user || status === "loading") return <Loader />;

  const { id, name, email, image, mobile, address } = user[0];

  function handleChangeName(e) {
    const newName = e.target.value.trim();
    if (newName === name) return;

    if (newName) dispatch(changeName({ userId: id, name: newName }));
  }

  function handleChangeEmail(e) {
    const newEmail = e.target.value;
    if (newEmail === email) return;

    if (newEmail && /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/.test(newEmail)) {
      dispatch(changeEmail({ userId: id, email: newEmail }));
    } else {
      toast.error("Please enter a valid email");
    }
  }

  function handleChangeMobile(e) {
    const newMobile = e.target.value.trim();
    if (newMobile === mobile) return;

    if (newMobile && /^(?:\+98|0)?9[0-9]{9}$/.test(newMobile)) {
      dispatch(changeMobile({ userId: id, mobile: newMobile }));
    } else {
      toast.error("Please enter a valid mobile number");
    }
  }

  // function handleChangePassword(e) {}

  function handleChangeAddress(e) {
    const newAddress = e.target.value;
    if (newAddress === address) return;

    if (newAddress.trim()) {
      dispatch(changeAddress({ userId: id, address: newAddress }));
    }
  }

  function handleChangeImage(e) {
    const file = e.target.files[0];

    if (!file) return;

    dispatch(uploadUserAvatar({ file, userId: id }));
  }

  return (
    <form action="" className="w-full laptop:w-[70%] p-4 laptop:p-0 laptop:m-8">
      <section className="w-full flex gap-6 items-center border-zinc-300 border-b-2 pb-4">
        <div className="relative">
          <img
            src={image}
            alt="userImage"
            className="w-20 h-20 bg-zinc-900 laptop:w-26 laptop:h-26 rounded-full object-cover"
          />
          <label
            htmlFor="changeImage"
            className="bg-white w-6 h-6 laptop:w-7.5 laptop:h-7.5 flex justify-center items-center rounded-full shadow-sm absolute bottom-0 left-14 laptop:left-19 z-20 laptop:cursor-pointer"
          >
            <img src={pencilIcon} alt="pencil" className="w-4 laptop:w-5" />
          </label>
          <input
            type="file"
            accept="Image/*"
            id="changeImage"
            className="hidden"
            onChange={handleChangeImage}
          />
        </div>
        <div className="laptop:text-lg">
          <p className="text-md font-semibold laptop:text-lg tracking-wide text-zinc-800">
            {name ? name : "Username"}
          </p>
          <p className="text-sm text-zinc-600 hidden tablet:block">
            {email ? email : "user@gmail.com"}
          </p>
        </div>
      </section>
      <section className="flex flex-col mt-4 divide-y divide-zinc-200">
        <div className="py-2 flex flex-col laptop:flex-row justify-between">
          <label
            htmlFor="username"
            className="font-medium text-lg text-zinc-800"
          >
            Name
          </label>
          <input
            type="text"
            id="username"
            placeholder="your name"
            defaultValue={name}
            onBlur={handleChangeName}
            className="outline-none text-lg text-zinc-700 border-none w-1/2"
          />
        </div>
        <div className="py-2 flex flex-col laptop:flex-row justify-between">
          <label htmlFor="email" className="font-medium text-lg text-zinc-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="yourname@gmail.com"
            defaultValue={email}
            onBlur={handleChangeEmail}
            className="outline-none text-lg text-zinc-700 border-none w-[90%] laptop:w-1/2"
          />
        </div>
        <div className="py-2 flex flex-col laptop:flex-row justify-between">
          <label htmlFor="mobile" className="font-medium text-lg text-zinc-800">
            Mobile number
          </label>
          <input
            type="text"
            id="mobile"
            placeholder="Add number"
            defaultValue={mobile}
            onBlur={handleChangeMobile}
            className="outline-none text-lg text-zinc-700 border-none w-2/3 laptop:w-1/2"
          />
        </div>
        {/* <div className="py-2 flex flex-col laptop:flex-row justify-between">
          <label htmlFor="password" className="font-medium text-zinc-800">
            Password
          </label>
          <input
            type="text"
            id="password"
            placeholder="########"
            defaultValue={password}
            onBlur={handleChangePassword}
            className="outline-none border-none w-1/2"
          />
        </div> */}
        <div className="py-2 flex flex-col laptop:flex-row justify-between">
          <label
            htmlFor="address"
            className="font-medium text-lg text-zinc-800"
          >
            Address
          </label>

          <textarea
            id="address"
            placeholder="Iran"
            dir="ltr"
            defaultValue={address}
            onBlur={handleChangeAddress}
            className="outline-none text-lg text-zinc-700 border-none w2/3 laptop:w-1/2"
          ></textarea>
        </div>
      </section>
    </form>
  );
}

export default ProfileForm;
