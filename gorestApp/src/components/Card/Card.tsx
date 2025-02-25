import { FC } from "react";

import Button from "../Button/Button";
import "./Card.scss";

interface ICardProps {
  text: string;
  variant?: string;
}

const Card: FC<ICardProps> = ({ text, variant }) => {
  return (
    <div className={variant ? `card card__${variant}` : "card"}>
      <p className="card__text">{text}</p>
      {variant === "note" && (
        <div className="card__actions">
          <Button title="Подробнее" variant="card__button-about" />
          <Button title="Удалить" variant="card__button-delete" />
        </div>
      )}
    </div>
  );
};

export default Card;
