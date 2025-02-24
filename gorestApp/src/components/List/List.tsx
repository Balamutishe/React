import { FC } from "react";
import { TBoardsList } from "../../api/Boards";

import "./List.scss";

interface IListProps {
  data: TBoardsList;
  variant?: string;
}

const List: FC<IListProps> = ({ data, variant }) => {
  return (
    <ul className={`list ${variant}`}>
      {data.map((item) => (
        <li>{item.boardTitle}</li>
      ))}
    </ul>
  );
};

export default List;
