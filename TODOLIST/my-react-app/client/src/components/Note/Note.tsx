import { FC } from "react";
import { Link } from "react-router-dom";
import { QueryObserverResult } from "@tanstack/react-query";

import { TNote } from "../../api/Notes";
import { useMutationNoteDelete } from "../../hooks/useMutationNoteDelete";
import { Button } from "../Button/Button";

import "./Note.scss";

interface INoteProps {
  title: string;
  description: string;
  id: number;
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>;
}

export const Note: FC<INoteProps> = ({ title, description, id, refetch }) => {
  const deleteNote = useMutationNoteDelete(id);

  return (
    <div className="note">
      <div className="note__desc">
        <div className="note__header">
          <h3 className="note__title">{title}</h3>
        </div>
        <p className="note__text">{description}</p>
      </div>
      <div className="note__actions">
        <Button variant="note__button">
          <Link to={`/notes/${id}`}>Подробнее</Link>
        </Button>
        <Button
          onClick={() => {
            deleteNote.mutate();
            refetch();
          }}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
