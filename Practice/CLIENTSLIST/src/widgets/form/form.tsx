import { useFormContext } from "react-hook-form";
import { FormInputsContainer } from "./form-inputs-container";
import { ButtonSubmit } from "./form-button-submit";
import type { TClient } from "@shared/types";
import type { FC } from "react";

interface IProps {
  onSubmit: (clientData: Pick<TClient, "name" | "surname">) => void;
  inputs: React.ReactNode;
}

export const Form: FC<IProps> = ({ onSubmit, inputs }) => {
  const { handleSubmit } = useFormContext<Pick<TClient, "name" | "surname">>();

  return (
    <form
      className="flex flex-col w-1/1 justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInputsContainer inputs={inputs} />
      <ButtonSubmit />
    </form>
  );
};
