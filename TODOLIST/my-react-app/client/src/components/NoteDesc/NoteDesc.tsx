import { FC, useEffect, useState } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

import { deleteNote, changeNote, TNote } from "../../api/Notes";

import styles from "./NoteDesc.module.css";
import { Link } from "react-router-dom";

interface INoteDescProps {
  title: string;
  text: string;
  id: string;
  refetch: () => Promise<QueryObserverResult<TNote, Error>>;
}

export const NoteDesc: FC<INoteDescProps> = ({ title, text, id }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setNoteTitle(title);
    setNoteText(text);
  }, [title, text]);

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <input
          className={styles.title}
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
        <textarea
          className={styles.text}
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
      </div>
      <div className={styles.actions}>
        <button onClick={() => setDisabled(!disabled)}>Изменить дело</button>
        <Link
          to={"/"}
          onClick={() => {
            deleteNote(id);
          }}
        >
          Удалить дело
        </Link>
      </div>
    </div>
  );
};
