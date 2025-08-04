import { useFormContext } from "react-hook-form";
import { FormInputs } from "./form-inputs";
import { ButtonSubmit } from "./form-button-submit";
import { useClientCreate } from "../api";
import type { TClient } from "@shared/types";

export const Form = () => {
  const { handleSubmit, reset } =
    useFormContext<Pick<TClient, "name" | "surname">>();
  const createMutation = useClientCreate();

  const onSubmit = (clientData: Pick<TClient, "name" | "surname">) => {
    createMutation.mutate(clientData);
    reset();
  };

  return (
    <form
      className="flex flex-col w-1/1 justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInputs />
      <ButtonSubmit />
    </form>
  );
};
