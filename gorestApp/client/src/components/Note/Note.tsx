import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMutateDeleteCard } from "../../hooks/useMutateDeleteCard";
import { setNoteData } from "../../redux/noteDataSlice";
import { RootState } from "../../redux";

import DeleteCard from "../../assets/delete-card.svg?react";

import "./Note.scss";

interface INoteProps {
  id: string;
  text: string;
}

export const Note: FC<INoteProps> = ({ id, text }) => {
  const [noteText, setNoteText] = useState(text);
  const dispatch = useDispatch();
  const noteData = useSelector((state: RootState) => state.noteData);
  const deleteCard = useMutateDeleteCard(id, "note");

  useEffect(() => {
    if (noteData.text !== "" && noteData.id === id) {
      setNoteText(noteData.text);
    }
  }, [noteData.text, noteData.id, id]);

  return (
    <div
      className="note"
      onClick={() => {
        dispatch(setNoteData({ id: id, text: text, disableState: false }));
      }}
    >
      <div className="note__text">{noteText}</div>

      <div className="note__actions">
        <DeleteCard
          width={20}
          height={20}
          onClick={() => deleteCard.mutate()}
        />
      </div>
    </div>
  );
};
