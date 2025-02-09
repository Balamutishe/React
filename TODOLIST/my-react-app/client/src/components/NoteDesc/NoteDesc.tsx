import { FC, useEffect, useState } from "react";
import { QueryObserverResult } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { TNote } from "../../api/Notes";
import { useMutationNoteDelete } from "../../hooks/useMutationNoteDelete";
import { useMutationNoteChanged } from "../../hooks/useMutationNoteChanged";

import styles from "./NoteDesc.module.css";

interface INoteDescProps {
  title: string;
  description: string;
  id: number;
  refetch: () => Promise<QueryObserverResult<TNote, Error>>;
}

export const NoteDesc: FC<INoteDescProps> = ({
  title,
  description,
  id,
  refetch,
}) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [disabled, setDisabled] = useState(true);

  const changeNote = useMutationNoteChanged(id, noteTitle, noteText, refetch);
  const deleteNote = useMutationNoteDelete(id);

  useEffect(() => {
    setNoteTitle(title);
    setNoteText(description);
  }, [title, description]);

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

            changeNote.mutate();
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

            changeNote.mutate();
          }}
        />
      </div>
      <div className={styles.actions}>
        <button
          onClick={() => {
            setDisabled(!disabled);
          }}
        >
          Изменить дело
        </button>
        <Link
          to={"/"}
          onClick={() => {
            deleteNote.mutate();
          }}
        >
          Удалить дело
        </Link>
      </div>
    </div>
  );
};
