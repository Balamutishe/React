import { FC } from "react";

import "./Input.css";

interface IInputProps {
  value: string | undefined;
  type: string;
  placeholder: string;
  variant: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({
  value,
  type,
  placeholder,
  variant,
  onChange,
}) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`input ${variant}`}
    />
  );
};
