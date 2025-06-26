import type { FC, ReactNode } from "react";
import c from "./Input.module.css";

interface IInputProps {
  value: string;
  type: string;
  placeholder: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

export const Input: FC<IInputProps> = ({
  value,
  type,
  placeholder,
  className,
  onChange,
  children,
}) => {
  return (
    <div className={`${c.inputContainer}`}>
      {children && children}
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`${c.input} ${className ? className : ""}`}
      />
    </div>
  );
};
