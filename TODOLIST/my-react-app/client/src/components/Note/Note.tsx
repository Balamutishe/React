import { FC } from "react";
import { Link } from "react-router-dom";
import { QueryObserverResult } from "@tanstack/react-query";

import { TNote } from "../../api/Notes";
import { useMutationNoteDelete } from "../../hooks/useMutationNoteDelete";

import "./Note.scss";

interface INoteProps {
  title: string;
  description: string;
  id: number;
  created_at: string;
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>;
}

export const Note: FC<INoteProps> = ({
  title,
  description,
  id,
  created_at,
  refetch,
}) => {
  const deleteNote = useMutationNoteDelete(id);

  return (
    <div className="note">
      <div className="note__desc">
        <div className="note__header">
          <h3 className="note__title">{title}</h3>
          <span className="note__datetime">
            Дата создания дела: {created_at}
          </span>
        </div>
        <p className="note__text">{description}</p>
      </div>
      <div className="note__actions">
        <Link className="note__button" to={`/notes/${id}`}>
          Подробнее
        </Link>
        <button
          className="note__button"
          onClick={() => {
            deleteNote.mutate();
            refetch();
          }}
        >
          Удалить дело
        </button>
      </div>
    </div>
  );
};
