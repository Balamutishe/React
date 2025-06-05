import { useQueryGetAllUsers } from "../../hooks/api/index.ts";
import { Users } from "./Users.tsx";
import { RenderElement } from "../RenderElement/RenderElement.tsx";

export const FetchUsers = () => {
  const queryUsersGet = useQueryGetAllUsers();

  return (
    <RenderElement
      Element={<Users users={queryUsersGet.data ? queryUsersGet.data : []} />}
      queryStatus={queryUsersGet.status}
      refetchFn={queryUsersGet.refetch}
    />
  );
};
