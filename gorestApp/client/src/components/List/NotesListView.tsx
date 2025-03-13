import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useQueryNotesList } from "../../hooks/useQueryNotesList";
import { ListActions } from "./ListActions";
import List from "./List";

export const NotesListView = () => {
  const params = useParams();
  const boardId = params.id || "ID not found";

  const notesList = useQueryNotesList();

  useEffect(() => {}, [notesList.data]);

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

      return (
        <>
          <ListActions variant="note" />
          <List notesList={filterNotesList} variant="note" />
        </>
      );
    }
  }
};
