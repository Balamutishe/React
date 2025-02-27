import { FC } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { queryClient } from "../../api/queryClient";
import Button from "../Button/Button";
import { fetchDeleteNote } from "../../api/Notes";
import "./Card.scss";

interface ICardProps {
  id: string;
  text: string;
  variant?: string;
}

const Card: FC<ICardProps> = ({ id, text, variant }) => {
  const useMutateDeleteNote = useMutation(
    {
      mutationFn: () => fetchDeleteNote(id),
    },
    queryClient
  );

  return (
    <div className={variant ? `card card__${variant}` : "card"}>
      <p className="card__text">{text}</p>
      {variant === "note" && (
        <div className="card__actions">
          <Link to={`/notes/${id}`}>
            <Button title="Подробнее" variant="card__button-about" />
          </Link>
          <Button
            title="Удалить"
            variant="card__button-delete"
            onClick={() => useMutateDeleteNote.mutate()}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
