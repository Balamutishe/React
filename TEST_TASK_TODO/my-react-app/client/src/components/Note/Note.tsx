import { Link } from "react-router-dom";
import { FC } from "react";

interface INoteProps {
  title: string;
  text: string;
  id: string;
}

import "./Note.css";

export const Note: FC<INoteProps> = ({ title, text, id }) => {
  return (
    <div className="note">
      <h2 className="note__title">{title}</h2>
      <p className="note__text">{text}</p>
      <Link to={`/notes/${id}`} className="note__link">
        Подробнее
      </Link>
    </div>
  );
};
