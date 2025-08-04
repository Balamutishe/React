import { InputFormField } from "@shared/ui";

export const FormInputs = () => {
  return (
    <div className="flex flex-col justify-center mb-4">
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
    </div>
  );
};
