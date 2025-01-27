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
  const [visibleNote, setVisibleNote] = useState(3);

  const handleFilteredList = () => {
    return list.filter((item, index) => {
      if (index < visibleNote) {
        return item;
      }
    });
  };

  const filterList = handleFilteredList();

  const handleLoadNote = () => {
    setVisibleNote(visibleNote + 3);
  };

  return (
    <div className="container-list">
      <ul className="list">
        <h2 className="list__title">Список дел</h2>
        {filterList.map((item) => (
          <li className="list__item" key={item.id}>
            <Note
              title={item.title}
              text={item.text}
              id={item.id}
              refetch={refetch}
            />
          </li>
        ))}
      </ul>
      <button
        className={
          visibleNote === list.length || visibleNote > list.length
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
