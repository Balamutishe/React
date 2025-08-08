import { ClientDelete } from "@features/clients/client-delete";

export const FormActions = ({ id }: { id: string }) => {
  return (
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
  );
};
