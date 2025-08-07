import { useForm } from "react-hook-form";

import { useClientChange } from "./api";
import { useStateCurrentUser } from "@app/store";
import { ClientDelete } from "../client-delete";
import { useEffect } from "react";
import type { TClient } from "@shared/types";

export const ClientChange = () => {
  const { register, setValue, handleSubmit, reset } = useForm();
  const changeMutation = useClientChange();
  const { name, surname, id } = useStateCurrentUser((state) => state.userData);

  const onSubmit = (clientData: Partial<TClient>) => {
    changeMutation.mutate(clientData);
    reset();
  };

  useEffect(() => {
    setValue("name", name);
    setValue("surname", surname);
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold font-xl">Изменить данные</h2>
      </div>
      <div className="flex flex-col justify-center mb-4">
        <input
          {...register("name")}
          type="text"
          defaultValue={name}
          className={`px-2 py-2 bg-gray-300 rounded mb-2`}
        />
        <input
          {...register("surname")}
          type="text"
          defaultValue={surname}
          className={`px-2 py-2 bg-gray-300 rounded`}
        />
      </div>

      <div className="w-full flex justify-center items-center flex-col">
        <button
          type="submit"
          className="w-1/4 px-4 py-2 mb-2 bg-green-600 hover:bg-green-300 text-white hover:text-gray-700 rounded cursor-pointer"
        >
          Изменить
        </button>
        <ClientDelete
          id={id}
          variant="w-1/4 px-4 py-2 bg-red-600 text-white hover:bg-red-500 hover:text-gray-700 cursor-pointer rounded"
        />
      </div>
    </form>
  );
};
