import { FC } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

import { deleteNote, TNote } from "../../api/Notes";

import styles from "./Note.module.css";
import { Link } from "react-router-dom";

interface INoteProps {
  title: string;
  text: string;
  id: string;
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>;
}

export const Note: FC<INoteProps> = ({ title, text, id, refetch }) => {
  return (
    <div className={styles.note}>
      <div className={styles.desc}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.actions}>
        <Link to={`/notes/${id}`}>Подробнее</Link>
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
  );
};
