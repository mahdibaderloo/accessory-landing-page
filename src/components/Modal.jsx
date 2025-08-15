import { createPortal } from "react-dom";
import closeIcon from "../data/images/close-square.svg";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./modalSlice";

function Modal({ children, onConfirm }) {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (isOpen)
    return createPortal(
      <div className="absolute left-0 top-0 w-full h-screen font-barlow z-50">
        <div className="blur-md bg-zinc-200 opacity-90 w-full h-screen"></div>
        <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center">
          <div className="shadow-lg bg-zinc-100 w-[95%] laptop:w-[50%] p-4 flex flex-col rounded-2xl">
            <img
              src={closeIcon}
              alt="icon"
              className="w-4 laptop:w-6 cursor-pointer"
              onClick={() => dispatch(closeModal())}
            />
            <p className="text-center font-medium text-sm laptop:text-xl text-zinc-800 mt-2">
              {children}
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <button
                className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 text-sm laptop:text-lg shadow text-zinc-50 px-3 py-1 rounded-md cursor-pointer"
                onClick={() => {
                  if (onConfirm) onConfirm();
                  dispatch(closeModal());
                }}
              >
                Yes
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 transition-all duration-200 text-sm laptop:text-lg shadow text-zinc-50 px-3 py-1 rounded-md cursor-pointer"
                onClick={() => dispatch(closeModal())}
              >
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
