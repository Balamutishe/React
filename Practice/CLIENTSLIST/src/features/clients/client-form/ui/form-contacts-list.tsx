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
    <div className="w-full px-4 py-2 mb-4 bg-gray-300 hover:bg-gray-300 rounded">
      <button
        type="button"
        className={`w-full px-4 py-2 ${contacts && "mb-4"} cursor-pointer`}
        onClick={() => {
          append({ type: "Телефон", value: "+7(999)-888-77-66" });
        }}
      >
        Добавить контакт
      </button>
      <ul>
        {fields.map((item, index) => (
          <li
            key={item.id}
            className="flex justify-between w-full mb-4 bg-white"
          >
            <div className="w-9/10">
              <Controller
                render={({ field }) => (
                  <select {...field} className="w-1/3 px-4 py-2">
                    <option value="Телефон">Телефон</option>
                    <option value="Почта">Почта</option>
                  </select>
                )}
                name={`contacts.${index}.type`}
                control={control}
              />
              <Controller
                render={({ field }) => (
                  <input {...field} className="w-2/3 px-4 py-2" />
                )}
                name={`contacts.${index}.value`}
                control={control}
              />
            </div>
            <button
              type="button"
              className="w-1/10 px-4 py-2"
              onClick={() => remove(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
