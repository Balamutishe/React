import { FC } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

import { Note } from "../Note/Note";
import { TNote } from "../../api/Notes";

// import styles from "./List.module.css";
import "./List.scss";

interface IListProps {
  list: TNote[];
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>;
}

export const List: FC<IListProps> = ({ list, refetch }) => {
  return (
    <div className="container-list">
      <ul className="list">
        <h2 className="list__title">Список дел</h2>
        {list.map((item) => (
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
    </div>
  );
};
