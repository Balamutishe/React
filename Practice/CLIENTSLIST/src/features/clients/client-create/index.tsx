import { FormProvider, useForm } from "react-hook-form";

import { Form } from "@widgets/form";
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

  const onReset = () => {
    methodsForm.reset();
  };

  return (
    <FormProvider {...methodsForm}>
      <Form
        title="Новый клиент"
        buttonSubmitText="Сохранить"
        onSubmit={onSubmit}
        inputs={
          <>
            <InputFormField name={"name"} labelText="Имя" varStyle="mb-2" />
            <InputFormField name={"surname"} labelText="Фамилия" />
          </>
        }
      />
      <div className="flex justify-center">
        <button
          type="button"
          className="w-1/4 px-4 py-2 mb-2 bg-gray-300 hover:bg-red-600 hover:text-white rounded cursor-pointer"
          onClick={onReset}
        >
          Отмена
        </button>
      </div>
    </FormProvider>
  );
};
