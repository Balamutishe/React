import { useEffect } from "react";

import { useQueryBoardsList } from "../../hooks/useQueryBoardsList";
import { ListActions } from "./ListActions";
import List from "./List";

export const BoardsListView = () => {
  const boardsList = useQueryBoardsList();

  useEffect(() => {}, [boardsList.data]);

  switch (boardsList.status) {
    case "error":
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => boardsList.refetch()}>Повторить запрос</button>
        </div>
      );
    case "success":
      return (
        <>
          <ListActions variant="board" />
          <List boardsList={boardsList.data} variant="board" />
        </>
      );
  }
};
