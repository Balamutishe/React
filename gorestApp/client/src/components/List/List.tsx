import { FC } from "react";

import { TBoardsList } from "../../api/Boards";
import { TNotesList } from "../../api/Notes";
import { Board } from "../Board/Board";
import { Note } from "../Note/Note";

import "./List.scss";

interface IListProps {
  boardsList?: TBoardsList;
  notesList?: TNotesList;
  variant: "note" | "board";
}

const List: FC<IListProps> = ({ boardsList, notesList }) => {
  return (
    <>
      <ul className="list">
        {boardsList &&
          boardsList.map((item) => (
            <li className="list__item" key={item._id}>
              <Board id={item._id} text={item.boardTitle} />
            </li>
          ))}
        {notesList &&
          notesList.map((item) => (
            <li className="list__item" key={item._id}>
              <Note id={item._id} text={item.noteText} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default List;
