import { useParams } from "react-router-dom";

import { NoteDesc } from "./NoteDesc";
import { useQueryNote } from "../../hooks/useQueryNote";

export const FetchNoteDescView = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("Дело не найдено");
  }

  const queryNote = useQueryNote(id);

  switch (queryNote.status) {
    case "success":
      return (
        <NoteDesc
          title={queryNote.data.title}
          description={queryNote.data.description}
          id={queryNote.data.id}
          refetch={queryNote.refetch}
        />
      );
    case "error":
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => queryNote.refetch()}>Повторить запрос</button>
        </div>
      );
  }
};
