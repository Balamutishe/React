import { FC, useState } from "react";
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

  const handleFilteredList = () => {
    return list.filter((item, index) => {
      if (index < countNote) {
        return item;
      }
    });
  };

  const filterList = handleFilteredList();

  const handleLoadNote = () => {
    setCountNote(countNote + 3);
  };

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
              text={item.text}
              id={item.id}
              date={item.date}
              refetch={refetch}
            />
          </li>
        ))}
      </ul>
      <button
        className={
          countNote === list.length || countNote > list.length
            ? "button--load invisible"
            : "button--load visible"
        }
        onClick={() => handleLoadNote()}
      >
        Загрузить еще
      </button>
    </div>
  );
};
