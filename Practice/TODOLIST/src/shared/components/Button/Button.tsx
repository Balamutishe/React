import type { FC, ReactNode } from "react";
import c from "./Button.module.css";

interface IButtonProps {
  text?: string;
  children?: ReactNode;
  variant?: "default" | "primary" | "secondary" | "danger" | "icon";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<IButtonProps> = ({
  children,
  text,
  variant,
  onClick,
  disabled,
  type = "button",
}) => {
  return (
    <button
      className={`${c.button} ${variant === "default" && c.default} ${
        variant === "primary" && c.primary
      } ${variant === "secondary" && c.secondary} ${
        variant === "danger" && c.danger
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children && <span className={c.children}>{children}</span>}
      {text && <span className={c.text}>{text}</span>}
    </button>
  );
};
