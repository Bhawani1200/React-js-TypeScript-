import { ReactNode } from "react";
import { RxCross1 } from "react-icons/rx";

type ModalType = {
  title?: string;
  content?: string;
  actions?: ReactNode;
  isOpen?: boolean;
  setIsOpen: (_: boolean) => void;
};

const Modal = ({
  actions,
  content,
  isOpen = false,
  setIsOpen,
  title,
}: ModalType) => {
  return (
    <div className={isOpen ? "" : "hidden"}>
      <div className="fixed top-0 left-0 bottom-0 right-0 z-10 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="min-h-10 bg-white w-1/3 py-10 px-12 rounded-2xl shadow-md">
          <div className="flex justify-between items-start">
            <div className="text-2xl font-semibold text-slate-700">{title}</div>
            <button onClick={() => setIsOpen(false)}>
              <RxCross1 />
            </button>
          </div>
          <div className="py-5">{content}</div>
          <div className="flex justify-between mt-5">{actions}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
