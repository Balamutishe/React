import { FC } from "react";
import { Link } from "react-router-dom";
import { TBoardsList, TNoteList } from "../../api/Boards";
import Card from "../Card/Card";

import "./List.scss";

interface IListProps {
  boardsList?: TBoardsList;
  notesList?: TNoteList;
  variant?: "note" | "board";
}

const List: FC<IListProps> = ({ boardsList, notesList, variant }) => {
  return (
    <ul className="list">
      {boardsList &&
        boardsList.map((item) => (
          <li className="list__item" key={item.id}>
            <Link to={`/boards/${item.id}`}>
              <Card text={item.boardTitle} variant={variant} />
            </Link>
          </li>
        ))}
      {notesList &&
        notesList.map((item) => (
          <li className="list__item" key={item.id}>
            <Link to={`/notes/${item.id}`}>
              <Card text={item.text} variant={variant} />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default List;
