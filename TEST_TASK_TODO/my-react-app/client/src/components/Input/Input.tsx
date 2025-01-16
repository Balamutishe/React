import { FC } from "react";

import "./Input.css";

interface IInputProps {
  name: string;
  value: string | undefined;
  type: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({
  name,
  value,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <input
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="input"
    />
  );
};
