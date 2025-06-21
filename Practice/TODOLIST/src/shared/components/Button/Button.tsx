import type { FC, ReactNode } from "react";
import c from "./Button.module.css";

interface IButtonProps {
  text?: string;
  children?: ReactNode;
  variant: "default" | "primary" | "secondary" | "danger";
}

export const Button: FC<IButtonProps> = ({ children, text, variant }) => {
  return (
    <button
      className={`${c.button} ${variant === "default" && c.default} ${
        variant === "primary" && c.primary
      } ${variant === "secondary" && c.secondary} ${
        variant === "danger" && c.danger
      }`}
    >
      {children && <span className={c.children}>{children}</span>}
      {text && <span className={c.text}>{text}</span>}
    </button>
  );
};
