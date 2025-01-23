import { QueryObserverResult } from "@tanstack/react-query";
import { useState, FC } from "react";

import { createNote, TNote } from "../../api/Notes";

import styles from "./FormNoteAdd.module.css";

interface IFormProps {
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>;
}

export const FormNoteAdd: FC<IFormProps> = ({ refetch }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNote(title, text);
    setTitle("");
    setText("");
    refetch();
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleFormSubmit(e)}>
      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={title}
          placeholder="Название дела"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          name="text"
          value={text}
          placeholder="Подробности дела"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit">
        Добавить дело
      </button>
    </form>
  );
};
