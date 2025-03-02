import { FC, ReactNode } from "react";

import "./Button.scss";

interface IButtonProps {
  title: string | ReactNode;
  children: ReactNode;
  variant?: string;
  onClick?: (event: React.BaseSyntheticEvent) => void;
}

const Button: FC<IButtonProps> = ({ title, variant, children, onClick }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      <span>{children}</span>
      <span>{title}</span>
    </button>
  );
};

export default Button;
