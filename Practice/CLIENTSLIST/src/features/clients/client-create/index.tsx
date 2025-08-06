import { FormProvider, useForm } from "react-hook-form";

import { FormHeader, FormContainer, Form } from "@widgets/form";
import { useClientCreate } from "./api";
import type { TClient } from "@shared/types";
import { InputFormField } from "@shared/ui";

export const ClientCreate = () => {
  const methodsForm = useForm();
  const createMutation = useClientCreate();

  const onSubmit = (clientData: Pick<TClient, "name" | "surname">) => {
    createMutation.mutate({ clientData });
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
              />
              <InputFormField
                registerName={"surname"}
                placeholder={""}
                varStyle="px-2 py-2 bg-gray-300 rounded"
              />
            </>
          }
        />
      </FormContainer>
    </FormProvider>
  );
};
