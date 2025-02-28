import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { fetchChangeNote, fetchDeleteNote } from "../../api/Notes";
import { fetchChangeBoard, fetchDeleteBoard } from "../../api/Boards";
import { queryClient } from "../../api/queryClient";
import Button from "../Button/Button";
import EditCard from "../../assets/edit-card.svg?react";
import DeleteCard from "../../assets/delete-card.svg?react";
import "./Card.scss";

interface ICardProps {
  id: string;
  text: string;
  variant?: string;
}

const Card: FC<ICardProps> = ({ id, text, variant }) => {
  const [inputText, setInputText] = useState(text);

  const useMutateDeleteCard = useMutation(
    {
      mutationFn: () =>
        variant === "note" ? fetchDeleteNote(id) : fetchDeleteBoard(id),
    },
    queryClient
  );

  const useMutateChange = useMutation(
    {
      mutationFn: () =>
        variant === "note"
          ? fetchChangeNote(id, inputText)
          : fetchChangeBoard(id, inputText),
    },
    queryClient
  );

  return (
    <div className={variant ? `card card__${variant}` : "card"}>
      <input
        name="inputText"
        className="card__text"
        placeholder={inputText}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />

      {variant === "board" && (
        <div className="card__actions-board">
          <EditCard
            width={20}
            height={20}
            onClick={() => useMutateChange.mutate()}
          />
          <DeleteCard
            width={20}
            height={20}
            onClick={() => useMutateDeleteCard.mutate()}
          />
        </div>
      )}
      {variant === "note" && (
        <div className="card__actions-note">
          <Link to={`/notes/${id}`}>
            <Button title="Подробнее" variant="card__button-about" />
          </Link>
          <Button
            title="Удалить"
            variant="card__button-delete"
            onClick={() => useMutateDeleteCard.mutate()}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
