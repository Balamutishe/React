import type { FC } from "react";

interface IProps {
  name?: string;
  labelText?: string;
  placeholder?: string;
  defaultValue?: string;
  varStyle?: string;
}

export const InputFormField: FC<IProps> = ({
  name,
  labelText,
  placeholder,
  defaultValue,
  varStyle,
}) => {
  return (
    <>
      {labelText && (
        <label htmlFor={name} className="mb-1 text-gray-300 text-sm">
          {labelText}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`px-2 py-2 bg-gray-300 rounded ${varStyle}`}
      />
    </>
  );
};
