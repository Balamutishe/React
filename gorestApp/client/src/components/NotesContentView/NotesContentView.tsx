import { useSelector } from "react-redux";

import { NotesListView } from "../List/NotesListView";
import { NoteDesc } from "../NoteDesc/NoteDesc";
import { RootState } from "../../redux";

import "./NotesContentView.scss";

export const NotesContentView = () => {
  const noteText = useSelector((state: RootState) => state.noteText);

  return (
    <div className="notes">
      <div className="notes__list-container">
        <NotesListView />
      </div>
      <div className="notes__description">
        <NoteDesc noteText={noteText} />
      </div>
    </div>
  );
};
