import { ReactNode, FC } from "react";

interface IButtonProps {
  children: string | ReactNode;
  variant?: string;
  onClick?: (event: React.BaseSyntheticEvent) => void;
}

import "./Button.scss";

export const Button: FC<IButtonProps> = ({ children, variant, onClick }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
