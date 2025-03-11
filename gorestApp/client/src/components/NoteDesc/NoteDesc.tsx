import { useEffect, useState, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setNoteData } from "../../redux/noteDataSlice";
import { useMutateChangeCard } from "../../hooks/useMutateChangeCard";
import { RootState } from "../../redux";

import "./NoteDesc.scss";

export const NoteDesc = () => {
  const dispatch = useDispatch();
  const textRef = createRef<HTMLTextAreaElement>();
  const noteData = useSelector((state: RootState) => state.noteData);
  const [noteText, setNoteText] = useState("");
  const changeCard = useMutateChangeCard(noteData.id, "note", noteText);

  useEffect(() => {
    setNoteText(noteData.text);

    if (noteData.text !== "" && textRef.current !== null)
      textRef.current.focus();
  }, [noteData.text, textRef]);

  return (
    <textarea
      name="noteDesc"
      ref={textRef}
      disabled={noteData.disableState}
      value={noteData.text}
      onChange={(e) => {
        dispatch(setNoteData({ ...noteData, text: e.target.value }));
      }}
      onBlur={() => {
        changeCard.mutate();

        if (textRef.current !== null) {
          dispatch(setNoteData({ ...noteData, text: "", disableState: true }));
        }
      }}
    ></textarea>
  );
};
