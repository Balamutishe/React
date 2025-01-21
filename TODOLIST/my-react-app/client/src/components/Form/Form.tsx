import { useState } from "react";

import { createNote } from "../../api/User";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <form
        onSubmit={() => {
          createNote(title, text);
          setTitle("");
          setText("");
        }}
      >
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Заголовок"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Текст"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Добавить дело</button>
      </form>
    </>
  );
};
