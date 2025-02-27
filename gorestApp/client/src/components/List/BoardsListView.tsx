import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { fetchGetBoardsList } from "../../api/Boards";
import List from "./List";

export const BoardsListView = () => {
  const queryBoardsList = useQuery(
    {
      queryFn: () => fetchGetBoardsList(),
      queryKey: ["boardsList"],
    },
    queryClient
  );

  switch (queryBoardsList.status) {
    case "error":
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => queryBoardsList.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case "success":
      return <List boardsList={queryBoardsList.data} variant="board" />;
  }
};
