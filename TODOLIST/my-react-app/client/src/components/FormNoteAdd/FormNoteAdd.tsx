import { QueryObserverResult } from "@tanstack/react-query";
import { useState, FC } from "react";

import { TNote } from "../../api/Notes";
import { useMutationNoteCreated } from "../../hooks/useMutationNoteCreated";

import "./FormNoteAdd.scss";

interface IFormProps {
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>;
}

export const FormNoteAdd: FC<IFormProps> = ({ refetch }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createNote = useMutationNoteCreated(title, description, refetch);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNote.mutate();
  };

  return (
    <form
      className="form-add"
      onSubmit={(e) => {
        handleFormSubmit(e);
      }}
    >
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
          name="description"
          value={description}
          placeholder="Подробности дела"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="form-add__button" type="submit">
        Добавить дело
      </button>
    </form>
  );
};
