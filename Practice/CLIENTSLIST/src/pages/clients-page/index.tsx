import { List } from "@widgets/list";
import { useClientsQuery } from "./api/useClientsQuery";
import { Modal } from "@widgets/modal";
import { useStateModal, useStateSearch } from "@app/store";
import { ClientForm } from "@features/clients";

export const ClientsPage = () => {
  const { searchValue } = useStateSearch((state) => state);
  const queryResult = useClientsQuery(searchValue);
  const { setIsVisibility, setVariant, variant } = useStateModal(
    (state) => state
  );

  switch (queryResult.status) {
    case "error":
      return <div>Error: {queryResult.error.message}</div>;
    case "pending":
      return <div>Loading...</div>;
    case "success":
      return (
        <div className="w-full">
          <div className="flex justify-between align-center mb-10">
            <h2 className="text-3xl font-semibold">Клиенты</h2>
            <button
              onClick={() => {
                setIsVisibility(true);
                setVariant("create");
              }}
              className="px-4 py-2 bg-green-300 hover:bg-green-600 hover:text-white rounded cursor-pointer"
            >
              Добавить клиента
            </button>
          </div>
          <div className="w-full">
            <List data={queryResult.data} variant="clients" />
          </div>
          <Modal>
            <ClientForm variant={variant} />
          </Modal>
        </div>
      );
  }
};
