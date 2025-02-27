import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { fetchGetNotesList } from "../../api/Notes";
import List from "./List";

export const NotesListView = () => {
  const params = useParams();
  const boardId = params.id || "ID not found";

  const queryNotesList = useQuery(
    {
      queryFn: () => fetchGetNotesList(),
      queryKey: ["notesList"],
    },
    queryClient
  );

  switch (queryNotesList.status) {
    case "error":
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => queryNotesList.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case "success": {
      const boardNotesList = queryNotesList.data.filter(
        (note) => note.boardId === boardId
      );

      return <List notesList={boardNotesList} variant="note" />;
    }
  }
};
