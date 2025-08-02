import { FormProvider, useForm } from "react-hook-form";

import type { TClient } from "@shared/types";
import { useClientChange } from "./api";
import { InputFormField } from "@shared/ui";
import type { FC } from "react";

interface IProps {
  username: string;
  surname: string;
}

export const ClientChange: FC<IProps> = ({ username, surname }) => {
  const changeMutation = useClientChange();
  const methodsForm = useForm();

  const onSubmit = (clientData: Partial<TClient>) =>
    changeMutation.mutate(clientData);

  return (
    <div>
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
