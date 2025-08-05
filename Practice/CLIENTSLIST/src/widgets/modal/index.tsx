import type { FC, JSX } from "react";

import { useStateModal } from "@app/store";
import CloseIcon from "./closeIcon.svg?react";

interface IModalProps {
  children: JSX.Element;
}

export const Modal: FC<IModalProps> = ({ children }) => {
  const { visible, setIsVisibility } = useStateModal((state) => state);

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 w-full h-full bg-[#000000b3] z-100 flex justify-center items-center ${visible ? "visible" : "invisible"}`}
      onClick={() => setIsVisibility(false)}
    >
      <div
        className="relative flex w-1/4 items-center justify-center flex flex-col px-6 py-4 bg-gray-400 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={"button-modal-close"}
          onClick={() => {
            setIsVisibility(false);
          }}
        >
          <CloseIcon
            width={32}
            height={32}
            className="absolute z-300 top-2 right-4 flex justify-center items-center cursor-pointer"
          />
        </button>

        <div className="w-full h-full z-200">{children}</div>
      </div>
    </div>
  );
};
