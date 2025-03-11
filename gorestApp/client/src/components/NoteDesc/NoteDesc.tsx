import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setNoteText } from "../../redux/noteTextSlice";
import "./NoteDesc.scss";

interface INoteDescProps {
  noteText: string;
}

export const NoteDesc: FC<INoteDescProps> = ({ noteText }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    setText(noteText);
  }, [noteText]);

  return (
    <textarea
      name="noteDesc"
      value={text}
      onChange={(e) => {
        dispatch(setNoteText(e.target.value));
      }}
    ></textarea>
  );
};
