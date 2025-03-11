import { FC } from "react";
import { Link } from "react-router-dom";

import { TBoardsList } from "../../api/Boards";
import { TNotesList } from "../../api/Notes";
import { Board } from "../Board/Board";
import { Note } from "../Note/Note";
import Button from "../Button/Button";
import AddNote from "../../assets/add-note.svg?react";
import AddFolder from "../../assets/add-folder.svg?react";

import "./List.scss";
import { useMutateAddCard } from "../../hooks/useMutateAddCard";
import { useQueryBoardsList } from "../../hooks/useQueryBoardsList";

interface IListProps {
  boardsList?: TBoardsList;
  notesList?: TNotesList;
  variant: "note" | "board";
}

const List: FC<IListProps> = ({ boardsList, notesList, variant }) => {
  const queryBoardList = useQueryBoardsList();
  const addBoard = useMutateAddCard("board");

  return (
    <>
      <div className="container-button-card-add">
        {variant === "note" ? (
          <Button title={"Добавить запись"}>
            <AddNote width={30} height={30} />
          </Button>
        ) : (
          <Button
            title={"Добавить папку"}
            onClick={() => {
              addBoard.mutate();
              queryBoardList.refetch();
            }}
          >
            <AddFolder width={30} height={30} />
          </Button>
        )}
      </div>
      <ul className="list">
        {boardsList &&
          boardsList.map((item) => (
            <li className="list__item" key={item._id}>
              <Link to={`/boards/${item._id}`}>
                <Board id={item._id} text={item.boardTitle} />
              </Link>
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
