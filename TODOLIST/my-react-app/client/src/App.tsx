import { useState } from "react";
import { createNote, fetchNotesList } from "./api/User";

import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  (async () => {
    const response = await fetchNotesList();
    const data = await response.json();
    console.log(data);
  })();

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await createNote(title, text);
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
}

export default App;
