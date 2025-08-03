import { useStateFormChange } from "@app/store";
import type { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

export const FormContainer: FC<IProps> = ({ children }) => {
  const isOpen = useStateFormChange((state) => state.isOpen);

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} flex flex-col w-1/3  px-6 py-4 bg-gray-400 rounded `}
    >
      {children}
    </div>
  );
};
