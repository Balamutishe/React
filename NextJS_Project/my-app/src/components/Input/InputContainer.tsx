import { FC, ReactNode } from "react";

import "./Input.css";

interface IInputContainerProps {
  children: ReactNode;
  variant: string;
}

export const InputContainer: FC<IInputContainerProps> = ({
  children,
  variant,
}) => {
  return <div className={`input-container ${variant}`}>{children}</div>;
};
