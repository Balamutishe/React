import type { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

export const FormContainer: FC<IProps> = ({ children }) => {
  return (
    <div className={`flex flex-col w-1/3 px-6 py-4 bg-gray-400 rounded`}>
      {children}
    </div>
  );
};
