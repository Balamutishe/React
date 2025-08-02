import { useFormContext } from "react-hook-form";

export const InputFormField = ({
  registerName,
  placeholder,
  defaultValue,
}: {
  registerName: string;
  placeholder: string;
  defaultValue?: string;
}) => {
  const { register } = useFormContext();

  return (
    <input
      type="text"
      placeholder={placeholder}
      {...register(registerName)}
      defaultValue={defaultValue}
    />
  );
};
