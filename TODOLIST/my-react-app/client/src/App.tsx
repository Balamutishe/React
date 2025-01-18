import { useState } from "react";
import { createNote, deleteNote, fetchNotesList, findNote } from "./api/User";

import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  (async () => {
    const list = await fetchNotesList();

    // const note = await findNote("01483953-86d0-4823-a09e-1d959e90505d");

    console.log(list);
  })();

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await createNote(title, text);
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
      <button
        onClick={async () =>
          await deleteNote("d08f2266-a8b5-4ce0-a2f2-a2d5a3ca491d")
        }
        type="button"
      >
        Удалить дело
      </button>
    </>
  );
}

export default App;
