import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setNoteText } from "../../redux/noteTextSlice";
import "./NoteDesc.scss";

interface INoteDescProps {
  noteText: string;
}

export const NoteDesc: FC<INoteDescProps> = ({ noteText }) => {
  const dispatch = useDispatch();
  const [textareaValue, setTextareaValue] = useState("");

  useEffect(() => {
    setTextareaValue(noteText);
  }, [noteText]);

  return (
    <div className="note-desc">
      <textarea
        name="noteDesc"
        value={textareaValue}
        onChange={(e) => {
          dispatch(setNoteText(e.target.value));
        }}
      ></textarea>
    </div>
  );
};
