import { Controller, useFieldArray, useForm } from "react-hook-form";

import { useClientCreate } from "./api";

export const ClientCreate = () => {
  const { register, handleSubmit, reset, control } = useForm<{
    name: string;
    surname: string;
    contacts: { type: string; value: string }[];
  }>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts",
  });

  const createMutation = useClientCreate();

  const onSubmit = (clientData: {
    name: string;
    surname: string;
    contacts: { type: string; value: string }[];
  }) => {
    createMutation.mutate(clientData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold font-xl">Добавить клиента</h2>
      </div>
      <div className="flex flex-col justify-center mb-4">
        <input
          {...register("name")}
          type="text"
          className={`px-2 py-2 bg-gray-300 rounded mb-2`}
        />
        <input
          {...register("surname")}
          type="text"
          className={`px-2 py-2 bg-gray-300 rounded`}
        />
      </div>

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

      <div className="w-full flex justify-center items-center flex-col">
        <button
          type="submit"
          className="w-1/4 px-4 py-2 mb-2 bg-green-600 hover:bg-green-300 text-white hover:text-gray-700 rounded cursor-pointer"
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};
