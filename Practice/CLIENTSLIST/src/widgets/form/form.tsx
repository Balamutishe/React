import { useFormContext } from "react-hook-form";
import { FormInputsContainer } from "./form-inputs-container";
import { ButtonSubmit } from "./form-button-submit";
import type { TClient } from "@shared/types";
import type { FC } from "react";
import { FormHeader } from "./form-header";

interface IProps {
  title: string;
  buttonSubmitText: string;
  onSubmit: (clientData: Pick<TClient, "name" | "surname">) => void;
  inputs?: React.ReactNode;
}

export const Form: FC<IProps> = ({
  title,
  buttonSubmitText,
  onSubmit,
  inputs,
}) => {
  const { handleSubmit } = useFormContext<Pick<TClient, "name" | "surname">>();

  return (
    <form
      className="flex flex-col w-1/1 justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormHeader title={title} />
      <FormInputsContainer inputs={inputs} />
      <div className="w-full">
        <ButtonSubmit text={buttonSubmitText} />
      </div>
    </form>
  );
};
