import React, { ReactNode } from "react";
import { FaX } from "react-icons/fa6";

const Modal = ({
  isOpen,
  close,
  children,
}: {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="z-[101] h-screen scrollbar-prop fixed inset-0 bg-black  bg-opacity-70 flex justify-center items-center ">
      <div className="z-[102] flex justify-center items-center text-white w-full p-5">
        <div className="w-full h-[90vh]">
          <div className="w-full">
            <button className=" float-right" onClick={close}>
              <FaX />
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
