import { FC, useState, createRef } from "react";
import { useMutation } from "@tanstack/react-query";

import { fetchChangeNote, fetchDeleteNote } from "../../api/Notes";
import { fetchChangeBoard, fetchDeleteBoard } from "../../api/Boards";
import { queryClient } from "../../api/queryClient";
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
  const inputRef = createRef<HTMLInputElement>();

  const handleInputDisabled = () => {
    if (inputRef.current !== null) {
      if (inputRef.current.disabled) {
        inputRef.current.disabled = false;
        inputRef.current.focus();
      } else {
        inputRef.current.disabled = true;
      }
    }
  };

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
        ref={inputRef}
        name="inputText"
        className="card__text"
        value={inputText}
        disabled
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onBlur={() => {
          useMutateChange.mutate();
        }}
        style={{ pointerEvents: "none" }}
      />

      <div className="card__actions">
        <EditCard
          width={20}
          height={20}
          onClick={() => {
            handleInputDisabled();
          }}
        />
        <DeleteCard
          width={20}
          height={20}
          onClick={() => useMutateDeleteCard.mutate()}
        />
      </div>
    </div>
  );
};

export default Card;
