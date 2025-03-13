import { useEffect, useState, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setNoteData } from "../../redux/noteDataSlice";
import { useMutateChangeCard } from "../../hooks/useMutateChangeCard";
import { useMutateDeleteCard } from "../../hooks/useMutateDeleteCard";
import { RootState } from "../../redux";

import "./NoteDesc.scss";

export const NoteDesc = () => {
  const dispatch = useDispatch();
  const [noteText, setNoteText] = useState("");
  const textRef = createRef<HTMLTextAreaElement>();
  const noteData = useSelector((state: RootState) => state.noteData);
  const changeCard = useMutateChangeCard(noteData.id, "note", noteText);
  const deleteCard = useMutateDeleteCard(noteData.id, "note");

  useEffect(() => {
    if (textRef.current !== null && noteData.focusState === true) {
      textRef.current.focus();
    }

    setNoteText(noteData.text);
  }, [noteData.text, textRef, noteData.focusState]);

  return (
    <textarea
      name="noteDesc"
      ref={textRef}
      disabled={noteData.disableState}
      value={noteData.text}
      onChange={(e) => {
        dispatch(setNoteData({ ...noteData, text: e.target.value }));
      }}
      onBlur={async () => {
        if (textRef.current !== null) {
          if (textRef.current.value !== "") {
            changeCard.mutate();
          } else {
            deleteCard.mutate();
          }
        }

        dispatch(
          setNoteData({
            ...noteData,
            focusState: false,
          })
        );
      }}
    ></textarea>
  );
};
