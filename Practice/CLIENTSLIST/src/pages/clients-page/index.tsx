import { List } from "@widgets/list";
import { useClientsQuery } from "./api/useClientsQuery";
import { ClientChange } from "@features/clients";

export const ClientsPage = () => {
  const queryResult = useClientsQuery();

  switch (queryResult.status) {
    case "error":
      return <div>Error: {queryResult.error.message}</div>;
    case "pending":
      return <div>Loading...</div>;
    case "success":
      return (
        <div className="w-full">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Clients</h2>
          </div>
          <div className="w-full">
            <List data={queryResult.data} variant="clients" />
          </div>
          <ClientChange />
        </div>
      );
  }
};
