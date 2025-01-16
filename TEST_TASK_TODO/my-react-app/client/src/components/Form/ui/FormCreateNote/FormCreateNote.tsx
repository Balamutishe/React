import { useState } from "react";

import { Input } from "../../../Input/Input";
import { FormField } from "../FormField";
import { Button } from "../../../Button/Button";

export const FormCreateNote = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  return (
    <>
      <form className="form">
        <h2 className="form__title">Новое дело</h2>
        <div className="form__inputs">
          <FormField label="">
            <Input
              name="noteTitle"
              type="text"
              placeholder="Введите заголовок"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
          </FormField>
          <FormField label="">
            <Input
              name="noteText"
              type="text"
              placeholder="Введите текст"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
          </FormField>
        </div>

        <Button variant="button-default" title="Добавить дело" />
      </form>
    </>
  );
};
