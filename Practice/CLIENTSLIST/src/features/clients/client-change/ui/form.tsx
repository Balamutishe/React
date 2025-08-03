import { useFormContext } from "react-hook-form";
import { FormInputs } from "./form-inputs";
import { ButtonSubmit } from "./form-button-submit";
import { useClientChange } from "../api";
import type { TClient } from "@shared/types";
import { useStateCurrentUser } from "@app/store";

export const Form = () => {
  const { handleSubmit } = useFormContext();
  const { id } = useStateCurrentUser((state) => state.userData);
  const changeMutation = useClientChange();

  const onSubmit = (clientData: Partial<TClient>) =>
    changeMutation.mutate({ id, clientData });

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
