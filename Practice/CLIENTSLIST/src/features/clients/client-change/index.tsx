import { FormProvider, useForm } from "react-hook-form";

import type { TClient } from "@shared/types";
import { FormHeader, FormContainer, Form } from "@widgets/form";
import { useClientChange } from "./api";
import { InputFormField } from "@shared/ui";
import { useStateCurrentUser } from "@app/store";

export const ClientChange = () => {
  const methodsForm = useForm();
  const changeMutation = useClientChange();
  const { name, surname } = useStateCurrentUser((state) => state.userData);

  const onSubmit = (clientData: Pick<TClient, "name" | "surname">) => {
    changeMutation.mutate({ clientData });
    methodsForm.reset();
  };

  return (
    <FormProvider {...methodsForm}>
      <FormContainer>
        <FormHeader />
        <Form
          onSubmit={onSubmit}
          inputs={
            <>
              <InputFormField
                registerName={"name"}
                placeholder={""}
                varStyle="mb-2 px-2 py-2 bg-gray-300 rounded"
                defaultValue={name}
              />
              <InputFormField
                registerName={"surname"}
                placeholder={""}
                varStyle="px-2 py-2 bg-gray-300 rounded"
                defaultValue={surname}
              />
            </>
          }
        />
      </FormContainer>
    </FormProvider>
  );
};
