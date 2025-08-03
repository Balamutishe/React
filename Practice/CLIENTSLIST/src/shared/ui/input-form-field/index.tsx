import { useFormContext } from "react-hook-form";

export const InputFormField = ({
  registerName,
  placeholder,
  defaultValue,
  varStyle,
}: {
  registerName: string;
  placeholder: string;
  defaultValue?: string;
  varStyle?: string;
}) => {
  const { register } = useFormContext();

  return (
    <input
      type="text"
      placeholder={placeholder}
      {...register(registerName)}
      defaultValue={defaultValue}
      className={varStyle}
    />
  );
};
