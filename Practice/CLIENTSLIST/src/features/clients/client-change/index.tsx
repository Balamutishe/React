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
  const isOpen = useStateFormChange((state) => state.isOpen);
  const setIsOpen = useStateFormChange((state) => state.setIsOpen);

  const onSubmit = (clientData: Partial<TClient>) =>
    changeMutation.mutate(clientData);

  const handleInputClick = (e: { target: { name: string; value: string } }) =>
    methodsForm.setValue(e.target.name, e.target.value);

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} flex flex-col w-1/3  px-6 py-4 bg-gray-400 rounded `}
    >
      <div className="flex justify-center mb-4">
        <h2 className="text-xl font-semibold font-xl">Change client data</h2>
      </div>
      <FormProvider {...methodsForm}>
        <form
          className="flex flex-col w-1/1 justify-center"
          onSubmit={methodsForm.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col justify-center mb-4">
            <InputFormField
              registerName={"username"}
              placeholder={""}
              defaultValue={username}
              varStyle="mb-2 px-2 py-2 bg-gray-300 rounded"
              onClick={handleInputClick}
            />
            <InputFormField
              registerName={"surname"}
              placeholder={""}
              defaultValue={surname}
              varStyle="px-2 py-2 bg-gray-300 rounded"
              onClick={handleInputClick}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/5 px-4 py-2 mb-2 bg-gray-300 hover:bg-green-600 hover:text-white rounded cursor-pointer"
            >
              Change
            </button>
          </div>
        </form>
      </FormProvider>
      <div className="flex justify-center">
        <button
          className="w-1/5 px-4 py-2 mb-2 bg-gray-300 hover:bg-red-600 hover:text-white rounded cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Exit
        </button>
      </div>
    </div>
  );
};
