import { FC } from "react";
import { Link } from "react-router-dom";
import { TBoardsList } from "../../api/Boards";
import { TNotesList } from "../../api/Notes";

import Card from "../Card/Card";

import "./List.scss";

interface IListProps {
  boardsList?: TBoardsList;
  notesList?: TNotesList;
  variant?: "note" | "board";
}

const List: FC<IListProps> = ({ boardsList, notesList, variant }) => {
  return (
    <ul className="list">
      {boardsList &&
        boardsList.map((item) => (
          <li className="list__item" key={item._id}>
            <Link to={`/boards/${item._id}`}>
              <Card id={item._id} text={item.boardTitle} variant={variant} />
            </Link>
          </li>
        ))}
      {notesList &&
        notesList.map((item) => (
          <li className="list__item" key={item._id}>
            <Card id={item._id} text={item.noteText} variant={variant} />
          </li>
        ))}
    </ul>
  );
};

export default List;
