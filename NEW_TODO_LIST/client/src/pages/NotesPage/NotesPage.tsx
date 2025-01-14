import { Button } from "../../components/Button/Button";
import { Menu } from "../../components/Menu/Menu";
import { NoteList } from "../../components/NoteList/NoteList";

import "./NotesPage.css";

export const NotesPage = () => {
  return (
    <>
      <Menu />
      <div className="container-button-add">
        <Button
          variant="button-default button-add"
          title="Добавить задачу
      "
        />
      </div>
      <NoteList />
    </>
  );
};
