import type { TFormData } from "@shared/types";
import { type FC } from "react";
import { type UseFormRegister } from "react-hook-form";

interface IProps {
  register: UseFormRegister<TFormData>;
}

export const FormInputsRequired: FC<IProps> = ({ register }) => {
  return (
    <div className="flex flex-col justify-center mb-4">
      <input
        {...register("name")}
        type="text"
        className={`px-2 py-2 bg-gray-300 rounded mb-2`}
      />
      <input
        {...register("surname")}
        type="text"
        className={`px-2 py-2 bg-gray-300 rounded mb-2`}
      />
    </div>
  );
};
