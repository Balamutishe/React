import { FC, useState, createRef, useEffect } from "react";

import { useMutateDeleteCard } from "../../hooks/useMutateDeleteCard";
import { useMutateChangeCard } from "../../hooks/useMutateChangeCard";
import EditCard from "../../assets/edit-card.svg?react";
import DeleteCard from "../../assets/delete-card.svg?react";

import "./Board.scss";
import { useQueryBoardsList } from "../../hooks/useQueryBoardsList";

interface IBoardProps {
  id: string;
  text: string;
}

export const Board: FC<IBoardProps> = ({ id, text }) => {
  const [boardText, setBoardText] = useState(text);
  const [disabled, setDisabled] = useState(true);
  const inputRef = createRef<HTMLInputElement>();

  const queryBoardList = useQueryBoardsList();
  const deleteCard = useMutateDeleteCard(id, "board");
  const changeCard = useMutateChangeCard(id, "board", boardText);

  useEffect(() => {
    if (inputRef.current !== null && !inputRef.current.disabled) {
      inputRef.current.focus();
    }

    if (inputRef.current !== null && inputRef.current.value === "") {
      setDisabled(false);
      inputRef.current.focus();
    }
  }, [inputRef, disabled]);

  return (
    <div className="board">
      <input
        ref={inputRef}
        name="boardText"
        className="board__text"
        value={boardText}
        disabled={disabled}
        onChange={(e) => {
          setBoardText(e.target.value);
        }}
        onBlur={() => {
          setDisabled(true);
          changeCard.mutate();

          if (inputRef.current !== null && inputRef.current.value === "") {
            deleteCard.mutate();
            queryBoardList.refetch();
          }
        }}
      />

      <div className="board__actions">
        <EditCard
          width={20}
          height={20}
          onClick={() => {
            if (inputRef.current !== null && inputRef.current.disabled) {
              setDisabled(false);
            }
          }}
        />
        <DeleteCard
          width={20}
          height={20}
          onClick={() => {
            deleteCard.mutate();
            queryBoardList.refetch();
          }}
        />
      </div>
    </div>
  );
};
