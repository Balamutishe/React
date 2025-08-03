import { FormProvider, useForm } from "react-hook-form";

import type { TClient } from "@shared/types";
import { useClientChange } from "./api";
import { InputFormField } from "@shared/ui";
import { useStateFormChange } from "@app/store";

export const ClientChange = () => {
  const changeMutation = useClientChange();
  const methodsForm = useForm();
  const { username, surname } = useStateFormChange(
    (state) => state.fieldsValues
  );
  const stateVisibilityForm = useStateFormChange((state) => state.isOpen);

  const onSubmit = (clientData: Partial<TClient>) =>
    changeMutation.mutate(clientData);

  return (
    <div className={`${stateVisibilityForm ? "block" : "hidden"}`}>
      <FormProvider {...methodsForm}>
        <form onSubmit={methodsForm.handleSubmit(onSubmit)}>
          <InputFormField
            registerName={"username"}
            placeholder={""}
            defaultValue={username}
          />
          <InputFormField
            registerName={"surname"}
            placeholder={""}
            defaultValue={surname}
          />
          <button type="submit">Change</button>
          <button>Exit</button>
        </form>
      </FormProvider>
    </div>
  );
};
