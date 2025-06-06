import { useQueryGetAllUsers } from "../../hooks/api/index.ts";
import { Users } from "./Users.tsx";
import { RenderElement } from "../RenderElement/RenderElement.tsx";

export const FetchUsers = () => {
  const { data, status, refetch } = useQueryGetAllUsers();

  return (
    <RenderElement
      Element={
        <Users
          usersList={data?.usersList ? data.usersList : []}
          pageCount={data?.pageCount ? data.pageCount : 1}
        />
      }
      queryStatus={status}
      refetchFn={refetch}
    />
  );
};
