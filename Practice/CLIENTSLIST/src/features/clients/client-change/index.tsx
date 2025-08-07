import { FormProvider, useForm } from "react-hook-form";

import type { TClient } from "@shared/types";
import { Form } from "@widgets/form";
import { useClientChange } from "./api";
import { InputFormField } from "@shared/ui";
import { useStateCurrentUser } from "@app/store";
import { ClientDelete } from "../client-delete";
import { useEffect } from "react";

export const ClientChange = () => {
  const methodsForm = useForm();
  const changeMutation = useClientChange();
  const { name, surname, id } = useStateCurrentUser((state) => state.userData);

  const onSubmit = (clientData: Pick<TClient, "name" | "surname">) => {
    changeMutation.mutate({ clientData });
    methodsForm.reset();
  };

  useEffect(() => {
    methodsForm.setValue("name", name);
    methodsForm.setValue("surname", surname);
  });

  return (
    <FormProvider {...methodsForm}>
      <Form
        title="Изменить данные"
        buttonSubmitText="Сохранить"
        onSubmit={onSubmit}
        inputs={
          <>
            <InputFormField
              name={"name"}
              labelText="Имя"
              varStyle="mb-2"
              defaultValue={name}
            />
            <InputFormField
              name={"surname"}
              labelText="Фамилия"
              defaultValue={surname}
            />
          </>
        }
      />
      <div className="w-full flex justify-center items-center">
        <ClientDelete
          id={id}
          variant="w-1/4 px-4 py-2 bg-red-600 text-white hover:bg-red-500 hover:text-gray-700 cursor-pointer rounded"
        />
      </div>
    </FormProvider>
  );
};
