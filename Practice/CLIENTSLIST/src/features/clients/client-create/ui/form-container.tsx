import type { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

export const FormContainer: FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};
