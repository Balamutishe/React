import { useFormContext } from "react-hook-form";

export const InputFormField = ({
  registerName,
  placeholder,
  defaultValue,
  varStyle,
  onClick,
}: {
  registerName: string;
  placeholder: string;
  defaultValue?: string;
  varStyle?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (e: any) => void;
}) => {
  const { register } = useFormContext();

  return (
    <input
      type="text"
      placeholder={placeholder}
      {...register(registerName)}
      defaultValue={defaultValue}
      className={varStyle}
      onClick={(e) => onClick(e)}
    />
  );
};
