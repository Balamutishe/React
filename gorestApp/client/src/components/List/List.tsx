import { FC } from "react";
import { Link } from "react-router-dom";
import { TBoardsList } from "../../api/Boards";
import { TNotesList } from "../../api/Notes";
import Card from "../Card/Card";
import Button from "../Button/Button";
import AddNote from "../../assets/add-note.svg?react";
import AddFolder from "../../assets/add-folder.svg?react";

import "./List.scss";

interface IListProps {
  boardsList?: TBoardsList;
  notesList?: TNotesList;
  variant: "note" | "board";
}

const List: FC<IListProps> = ({ boardsList, notesList, variant }) => {
  return (
    <div className="container-list">
      <div className="container-button-card-add">
        {variant === "note" ? (
          <Button title={"Добавить запись"}>
            <AddNote width={30} height={30} />
          </Button>
        ) : (
          <Button title={"Добавить папку"}>
            <AddFolder width={30} height={30} />
          </Button>
        )}
      </div>
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
    </div>
  );
};

export default List;
