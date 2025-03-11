import { useParams } from "react-router-dom";

import { useQueryNotesList } from "../../hooks/useQueryNotesList";

import List from "./List";

export const NotesListView = () => {
  const params = useParams();
  const boardId = params.id || "ID not found";

  const notesList = useQueryNotesList();

  switch (notesList.status) {
    case "error":
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => notesList.refetch()}>Повторить запрос</button>
        </div>
      );
    case "success": {
      const filterNotesList = notesList.data.filter(
        (note) => note.boardId === boardId
      );

      return <List notesList={filterNotesList} variant="note" />;
    }
  }
};
