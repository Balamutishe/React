import { FC, useState, createRef } from "react";

import { useMutateDeleteCard } from "../../hooks/useMutateDeleteCard";
import { useMutateChangeCard } from "../../hooks/useMutateChangeCard";
import EditCard from "../../assets/edit-card.svg?react";
import DeleteCard from "../../assets/delete-card.svg?react";

import "./Note.scss";

interface INoteProps {
  id: string;
  text: string;
}

export const Note: FC<INoteProps> = ({ id, text }) => {
  const [noteText, setNoteText] = useState(text);
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

  const deleteCard = useMutateDeleteCard(id, "note");
  const changeCard = useMutateChangeCard(id, "note", noteText);

  return (
    <div className="note">
      <input
        ref={inputRef}
        name="noteText"
        className="note__text"
        value={noteText}
        disabled
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
        onBlur={() => {
          changeCard.mutate();
        }}
      />

      <div className="note__actions">
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
