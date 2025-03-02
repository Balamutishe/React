import { FC, useState, createRef } from "react";

import { useMutateDeleteCard } from "../../hooks/useMutateDeleteCard";
import { useMutateChangeCard } from "../../hooks/useMutateChangeCard";
import EditCard from "../../assets/edit-card.svg?react";
import DeleteCard from "../../assets/delete-card.svg?react";

import "./Card.scss";

interface ICardProps {
  id: string;
  text: string;
  variant: string;
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

  const deleteCard = useMutateDeleteCard(id, variant);
  const changeCard = useMutateChangeCard(id, variant, inputText);

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
          changeCard.mutate();
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
