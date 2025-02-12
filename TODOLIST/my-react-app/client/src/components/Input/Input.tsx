import { FC } from "react";

import "./Input.scss";

interface IInputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  variant?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({
  type,
  name,
  value,
  placeholder,
  variant,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`input ${variant}`}
      onChange={onChange}
    />
  );
};
