import { FC, useState, createRef } from "react";

import { useMutateDeleteCard } from "../../hooks/useMutateDeleteCard";
import { useMutateChangeCard } from "../../hooks/useMutateChangeCard";
import EditCard from "../../assets/edit-card.svg?react";
import DeleteCard from "../../assets/delete-card.svg?react";

import "./Board.scss";

interface IBoardProps {
  id: string;
  text: string;
}

export const Board: FC<IBoardProps> = ({ id, text }) => {
  const [boardText, setBoardText] = useState(text);
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

  const deleteCard = useMutateDeleteCard(id, "board");
  const changeCard = useMutateChangeCard(id, "board", boardText);

  return (
    <div className="board">
      <input
        ref={inputRef}
        name="boardText"
        className="board__text"
        value={boardText}
        disabled
        onChange={(e) => {
          setBoardText(e.target.value);
        }}
        onBlur={() => {
          changeCard.mutate();
        }}
      />

      <div className="board__actions">
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
          onClick={() => deleteCard.mutate()}
        />
      </div>
    </div>
  );
};
