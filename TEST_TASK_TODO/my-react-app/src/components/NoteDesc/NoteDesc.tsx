import { Button } from "../../components/Button/Button";

import "./NoteDesc.css";

export const NoteDesc = () => {
  return (
    <div className="note-desc">
      <h1 className="note-desc__title">Заголовок</h1>
      <textarea className="note-desc__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus
        sit, consequatur fuga, cumque quam tempore necessitatibus labore
        similique magni at unde odit voluptatum blanditiis iure eaque autem
        natus repellat?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem placeat commodi fugit labore quia tempora molestias
        distinctio. Dolorem neque reiciendis, veniam, repudiandae, inventore nam
        sed dicta exercitationem incidunt debitis tempore. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Reprehenderit debitis repellat
        consequatur nulla iure reiciendis quisquam eveniet cum pariatur tempora
        ipsam, quos eligendi hic, est soluta maxime, odio ut inventore.
      </textarea>
      <div className="note-desc__actions">
        <Button
          variant="button-primary note-desc__button"
          title="Удалить задачу"
        />
      </div>
    </div>
  );
};
