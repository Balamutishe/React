import { FC } from "react";

import Button from "../Button/Button";
import "./Card.scss";

interface ICardProps {
  text: string;
}

const Card: FC<ICardProps> = ({ text }) => {
  return (
    <div className="card">
      <p className="card__text">{text}</p>
      <div className="card__actions">
        <Button title="Подробнее" variant="card__button-about" />
        <Button title="Удалить" variant="card__button-delete" />
      </div>
    </div>
  );
};

export default Card;
