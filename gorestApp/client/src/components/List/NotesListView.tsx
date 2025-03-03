import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useQueryNotesList } from "../../hooks/useQueryNotesList";
import { NoteDesc } from "../NoteDesc/NoteDesc";
import { RootState } from "../../redux";
import List from "./List";

export const NotesListView = () => {
  const noteText = useSelector((state: RootState) => state.noteText);

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
      const boardNotesList = notesList.data.filter(
        (note) => note.boardId === boardId
      );

      return (
        <div className="notes">
          <List notesList={boardNotesList} variant="note" />
          <NoteDesc noteText={noteText} />
        </div>
      );
    }
  }
};
