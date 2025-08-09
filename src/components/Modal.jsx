import { createPortal } from "react-dom";
import closeIcon from "../data/images/close-square.svg";

function Modal({ children }) {
  return createPortal(
    <div className="absolute left-0 top-0 w-full h-screen font-barlow">
      <div className="blur-md bg-zinc-200 opacity-90 w-full h-screen"></div>
      <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center">
        <div className="shadow-lg bg-zinc-100 w-[50%] p-4 flex flex-col rounded-2xl">
          <img src={closeIcon} alt="icon" className="w-6 cursor-pointer" />
          <p className="text-center font-medium text-xl text-zinc-800 mt-2">
            {children}
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 shadow text-zinc-50 px-3 py-1 rounded-md cursor-pointer">
              Yes
            </button>
            <button className="bg-red-600 hover:bg-red-700 transition-all duration-200 shadow text-zinc-50 px-3 py-1 rounded-md cursor-pointer">
              No
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
