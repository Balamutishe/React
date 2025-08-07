import type { FC } from "react";

interface IProps {
  title: string;
}

export const FormHeader: FC<IProps> = ({ title }) => {
  return (
    <div className="flex items-center mb-4">
      <h2 className="text-xl font-semibold font-xl">{title}</h2>
    </div>
  );
};
