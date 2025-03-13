import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useMutateAddCard } from "../../hooks/useMutateAddCard";

import { setNoteData } from "../../redux/noteDataSlice";
import { RootState } from "../../redux";

import Button from "../Button/Button";
import AddNote from "../../assets/add-note.svg?react";
import AddFolder from "../../assets/add-folder.svg?react";

import "./List.scss";

interface IListActionsProps {
  variant: string;
}

export const ListActions: FC<IListActionsProps> = ({ variant }) => {
  const dispatch = useDispatch();
  const noteData = useSelector((state: RootState) => state.noteData);

  const { id } = useParams();

  const addBoard = useMutateAddCard("board");
  const addNote = useMutateAddCard("note", id);

  return (
    <div className="container-button-card-add">
      {variant === "note" ? (
        <Button
          title={"Добавить запись"}
          onClick={() => {
            addNote.mutate();
            dispatch(
              setNoteData({
                ...noteData,
                id: "",
                text: "",
                disableState: false,
                focusState: true,
              })
            );
          }}
        >
          <AddNote width={30} height={30} />
        </Button>
      ) : (
        <Button
          title={"Добавить папку"}
          onClick={() => {
            addBoard.mutate();
          }}
        >
          <AddFolder width={30} height={30} />
        </Button>
      )}
    </div>
  );
};
