import { NotesListView } from "../List/NotesListView";
import { NoteDesc } from "../NoteDesc/NoteDesc";

import "./NotesContentView.scss";

export const NotesContentView = () => {
  return (
    <div className="notes">
      <div className="notes__list-container">
        <NotesListView />
      </div>
      <div className="notes__description">
        <NoteDesc />
      </div>
    </div>
  );
};
