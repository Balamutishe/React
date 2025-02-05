import { FC } from "react";
import { Link } from "react-router-dom";
import { QueryObserverResult } from "@tanstack/react-query";

import { deleteNote, TNote } from "../../api/Notes";

import "./Note.scss";

interface INoteProps {
  title: string;
  text: string;
  id: string;
  date: string;
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>;
}

export const Note: FC<INoteProps> = ({ title, text, id, date, refetch }) => {
  return (
    <div className="note">
      <div className="note__desc">
        <div className="note__header">
          <h3 className="note__title">{title}</h3>
          <span className="note__datetime">Дата создания дела: {date}</span>
        </div>
        <p className="note__text">{text}</p>
      </div>
      <div className="note__actions">
        <Link className="note__button" to={`/notes/${id}`}>
          Подробнее
        </Link>
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
