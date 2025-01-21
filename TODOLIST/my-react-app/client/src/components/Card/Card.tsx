import { FC, useState } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

import { deleteNote, changeNote, Note } from "../../api/User";

interface ICardProps {
  title: string;
  text: string;
  id: string;
  refetch: () => Promise<QueryObserverResult<Note[], Error>>;
}

export const Card: FC<ICardProps> = ({ title, text, id, refetch }) => {
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteText, setNoteText] = useState(text);
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <div>
        <input
          disabled={disabled}
          name="noteTitle"
          value={noteTitle}
          onChange={(e) => {
            setNoteTitle(e.target.value);
          }}
          onBlur={() => {
            setDisabled(true);
            changeNote(id, noteTitle, noteText);
          }}
        />
        <input
          disabled={disabled}
          name="noteText"
          value={noteText}
          onChange={(e) => {
            setNoteText(e.target.value);
          }}
          onBlur={() => {
            setDisabled(true);
            changeNote(id, noteTitle, noteText);
          }}
        />
        <div>
          <button onClick={() => setDisabled(!disabled)}>Изменить дело</button>
          <button
            onClick={() => {
              deleteNote(id);
              refetch();
            }}
          >
            Удалить дело
          </button>
        </div>
      </div>
    </>
  );
};
