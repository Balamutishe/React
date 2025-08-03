import { useStateCurrentUser } from "@app/store";
import { InputFormField } from "@shared/ui";

export const FormInputs = () => {
  const { username, surname } = useStateCurrentUser((state) => state.userData);

  return (
    <div className="flex flex-col justify-center mb-4">
      <InputFormField
        registerName={"username"}
        placeholder={""}
        varStyle="mb-2 px-2 py-2 bg-gray-300 rounded"
        defaultValue={username}
      />
      <InputFormField
        registerName={"surname"}
        placeholder={""}
        varStyle="px-2 py-2 bg-gray-300 rounded"
        defaultValue={surname}
      />
    </div>
  );
};
