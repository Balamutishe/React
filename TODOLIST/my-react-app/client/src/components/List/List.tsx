import { FC, useEffect, useState } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

import { Note } from "../Note/Note";
import { TNote } from "../../api/Notes";

import "./List.scss";

interface IListProps {
  list: TNote[];
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>;
}

export const List: FC<IListProps> = ({ list, refetch }) => {
  const [countNote, setCountNote] = useState(3);
  const [buttonLoadVisible, setButtonLoadVisible] = useState(false);

  useEffect(() => {
    if (countNote === list.length || countNote > list.length) {
      setButtonLoadVisible(true);
    } else {
      setButtonLoadVisible(false);
    }
  }, [countNote, list]);

  const filterList = list.filter((item, index) => {
    if (index < countNote) {
      return item;
    }
  });

  return (
    <div className="container-list">
      <ul className="list">
        <h2 className="list__title">
          {list.length === 0 ? "Список дел пуст" : "Список дел"}
        </h2>
        {filterList.map((item) => (
          <li className="list__item" key={item.id}>
            <Note
              title={item.title}
              description={item.description}
              id={item.id}
              created_at={item.created_at}
              refetch={refetch}
            />
          </li>
        ))}
      </ul>
      <button
        className={
          buttonLoadVisible ? "button--load invisible" : "button--load visible"
        }
        onClick={() => setCountNote(countNote + 3)}
      >
        Загрузить еще
      </button>
    </div>
  );
};
