import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";

const ModalContex = createContext<TModalContext | null>(null);

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TModalContext = {
  onClose: () => void;
};
const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContex.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md">
          {children}
        </div>
      </div>
    </ModalContex.Provider>,
    document.getElementById("portal") as Element
  );
};
type TCloseBtn = {
  children?: ReactNode;
};

type THeader = TCloseBtn;
const CloseButton = ({ children }: TCloseBtn) => {
  const { onClose } = useContext(ModalContex) as TModalContext;
  return (
    <div>
      {}
      <button onClick={onClose}>
        {children ? (
          children
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex justify-center items-center w-full mb-2">
      {children}
    </div>
  );
};

Modal.Header = Header;

Modal.CloseButton = CloseButton;
export default Modal;
