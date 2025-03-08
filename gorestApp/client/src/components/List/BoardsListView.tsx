import { useQueryBoardsList } from "../../hooks/useQueryBoardsList";
import List from "./List";

export const BoardsListView = () => {
  const boardsList = useQueryBoardsList();

  switch (boardsList.status) {
    case "error":
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => boardsList.refetch()}>Повторить запрос</button>
        </div>
      );
    case "success":
      return <List boardsList={boardsList.data} variant="board" />;
  }
};
