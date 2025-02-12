import { QueryObserverResult } from "@tanstack/react-query";
import { useState, FC } from "react";

import { TNote } from "../../api/Notes";
import { useMutationNoteCreated } from "../../hooks/useMutationNoteCreated";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

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
        <Input
          variant="form-auth__input"
          type="text"
          name="title"
          placeholder="Введите имя"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          variant="form-auth__input"
          type="text"
          name="description"
          placeholder="Описание"
          value={title}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button variant="form-add__button">Добавить дело</Button>
    </form>
  );
};
