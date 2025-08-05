import { FormProvider, useForm } from "react-hook-form";

import { FormHeader, FormContainer, Form } from "./ui";

export const ClientChange = () => {
  const methodsForm = useForm();

  return (
    <FormProvider {...methodsForm}>
      <FormContainer>
        <FormHeader />
        <Form />
      </FormContainer>
    </FormProvider>
  );
};
