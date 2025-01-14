import { FC, ReactNode } from "react";

import "./Button.css";

interface IButtonProps {
  title: string | ReactNode;
  variant: string;
  onClick?: (event: React.BaseSyntheticEvent) => void;
}

export const Button: FC<IButtonProps> = ({ title, variant, onClick }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {title}
    </button>
  );
};
