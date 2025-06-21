import type { FC, ReactNode } from "react";
import c from "./Button.module.css";

interface IButtonProps {
  children?: ReactNode;
  text?: string;
}

export const Button: FC<IButtonProps> = ({ children, text }) => {
  return (
    <button className={c.button}>
      {children && <span className={c.children}>{children}</span>}
      {text && <span className={c.text}>{text}</span>}
    </button>
  );
};
