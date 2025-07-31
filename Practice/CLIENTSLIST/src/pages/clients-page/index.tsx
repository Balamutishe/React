import { List } from "@widgets/list";
import { useClientsQuery } from "./api/useClientsQuery";

export const ClientsPage = () => {
  const queryResult = useClientsQuery();

  switch (queryResult.status) {
    case "error":
      return <div>Error: {queryResult.error.message}</div>;
    case "pending":
      return <div>Loading...</div>;
    case "success":
      <div>
        <List data={queryResult.data} variant="clients" />
      </div>;
  }
};
