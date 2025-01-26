import { QueryObserverResult } from "@tanstack/react-query";
import { useState, FC } from "react";

import { createNote, TNote } from "../../api/Notes";

import "./FormNoteAdd.scss";

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
    <form className="form-add" onSubmit={(e) => handleFormSubmit(e)}>
      <div className="form-add__inputs">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Название дела"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Подробности дела"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button className="form-add__button" type="submit">
        Добавить дело
      </button>
    </form>
  );
};
