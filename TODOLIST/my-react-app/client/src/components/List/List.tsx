import { FC } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

import { Note } from "../Note/Note";
import { TNote } from "../../api/Notes";

import styles from "./List.module.css";

interface IListProps {
  list: TNote[];
  refetch: () => Promise<QueryObserverResult<TNote[], Error>>;
}

export const List: FC<IListProps> = ({ list, refetch }) => {
  return (
    <>
      <h2 className={styles.title}>Список дел</h2>
      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.id}>
            <Note
              title={item.title}
              text={item.text}
              id={item.id}
              refetch={refetch}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
