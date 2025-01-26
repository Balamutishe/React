import { FC } from "react";
import { Link } from "react-router-dom";
import { QueryObserverResult } from "@tanstack/react-query";

import { deleteNote, TNote } from "../../api/Notes";

import "./Note.scss";

interface INoteProps {
  title: string;
  text: string;
  id: string;
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>;
}

export const Note: FC<INoteProps> = ({ title, text, id, refetch }) => {
  return (
    <div className="note">
      <div className="note__desc">
        <h3 className="note__title">{title}</h3>
        <p className="note__text">{text}</p>
      </div>
      <div className="note__actions">
        <button className="note__button">
          <Link to={`/notes/${id}`}>Подробнее</Link>
        </button>
        <button
          className="note__button"
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
