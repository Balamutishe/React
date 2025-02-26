import { FC, ReactNode } from "react";

import "./Button.scss";

interface IButtonProps {
  title: string | ReactNode;
  variant?: string;
  onClick?: (event: React.BaseSyntheticEvent) => void;
}

const Button: FC<IButtonProps> = ({ title, variant, onClick }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
