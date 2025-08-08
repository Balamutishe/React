import type { TFormData } from "@shared/types";
import { useCallback, useEffect, type FC } from "react";
import { Controller, useFieldArray, type Control } from "react-hook-form";

interface IProps {
  control: Control<TFormData, unknown, TFormData>;
  contacts?: {
    type: string;
    value: string;
  }[];
}

export const FormContactsList: FC<IProps> = ({ contacts, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts",
  });

  const onAppendContactsFields = useCallback(() => {
    remove();

    if (contacts) {
      contacts?.forEach((contact) => {
        append({ type: contact.type, value: contact.value });
      });
    }
  }, [contacts, append, remove]);

  useEffect(() => {
    onAppendContactsFields();
  }, [contacts, onAppendContactsFields]);

  return (
    <div>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <Controller
              render={({ field }) => (
                <select {...field}>
                  <option value="Телефон">Телефон</option>
                  <option value="Почта">Почта</option>
                </select>
              )}
              name={`contacts.${index}.type`}
              control={control}
            />
            <Controller
              render={({ field }) => <input {...field} />}
              name={`contacts.${index}.value`}
              control={control}
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="w-1/4 px-4 py-2 mb-2 bg-blue-600 hover:bg-blue-300 text-white hover:text-gray-700 rounded cursor-pointer"
        onClick={() => {
          append({ type: "Телефон", value: "+7(999)-888-77-66" });
        }}
      >
        append
      </button>
    </div>
  );
};
