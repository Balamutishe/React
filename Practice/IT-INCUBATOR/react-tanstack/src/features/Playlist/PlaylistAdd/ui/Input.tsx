import type { FC } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  registerName: string;
  placeholder: string;
}

export const Input: FC<IProps> = ({ registerName, placeholder }) => {
  const { register } = useFormContext();

  return <input {...register(registerName)} placeholder={placeholder} />;
};
