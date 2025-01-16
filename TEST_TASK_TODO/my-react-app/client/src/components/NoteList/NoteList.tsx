import { Note } from "../Note/Note";

import "./NoteList.css";

export const NoteList = () => {
  return (
    <div className="container-notes-list">
      <ul className="notes-list">
        <li className="notes-list__item">
          <Note
            id=""
            title="Первая задача"
            text="Тралялялялялялялялялялялялялялялялля"
          />
        </li>
        <li className="notes-list__item">
          <Note
            id=""
            title="Вторая задача"
            text="Тралялялялялялялялялялялялялялялялля"
          />
        </li>
        <li className="notes-list__item">
          <Note
            id=""
            title="Третья задача"
            text="Тралялялялялялялялялялялялялялялялля"
          />
        </li>
      </ul>
    </div>
  );
};
