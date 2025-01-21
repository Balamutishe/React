import { FC } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

import { Card } from "../Card/Card";
import { Note } from "../../api/User";

interface IListProps {
  list: Note[];
  refetch: () => Promise<QueryObserverResult<Note[], Error>>;
}

export const List: FC<IListProps> = ({ list, refetch }) => {
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Card
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
