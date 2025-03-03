import { FC, useState, createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setNoteText } from "../../redux/noteTextSlice";
import { useMutateDeleteCard } from "../../hooks/useMutateDeleteCard";
import { useMutateChangeCard } from "../../hooks/useMutateChangeCard";
import { RootState } from "../../redux";
import EditCard from "../../assets/edit-card.svg?react";
import DeleteCard from "../../assets/delete-card.svg?react";

import "./Card.scss";

interface ICardProps {
  id: string;
  text: string;
  variant: string;
}

const Card: FC<ICardProps> = ({ id, text, variant }) => {
  const dispatch = useDispatch();
  const noteText = useSelector((state: RootState) => state.noteText);

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

  const deleteCard = useMutateDeleteCard(id, variant);
  const changeCard = useMutateChangeCard(id, variant, inputText);

  useEffect(() => {
    if (variant === "note" && noteText !== "") {
      setInputText(noteText);
    }
  }, [noteText, variant]);

  return (
    <div className={variant ? `card card__${variant}` : "card"}>
      <input
        ref={inputRef}
        name="inputText"
        className="card__text"
        value={inputText}
        disabled
        onChange={(e) => {
          dispatch(setNoteText(e.target.value));
        }}
        onBlur={() => {
          changeCard.mutate();
        }}
        onFocus={(e) => {
          dispatch(setNoteText(e.target.value));
        }}
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
          onClick={() => deleteCard.mutate()}
        />
      </div>
    </div>
  );
};

export default Card;
