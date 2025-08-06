import type { FC } from "react";

interface IProps {
  inputs: React.ReactNode;
}

export const FormInputsContainer: FC<IProps> = ({ inputs }) => {
  return <div className="flex flex-col justify-center mb-4">{inputs}</div>;
};
