import { FC } from "react";
import { useParams } from "react-router-dom";
import { findBoardNotes } from "../../api/Boards";
import { boardsList } from "../../api/Boards";
import List from "./List";

interface IListViewProps {
  variant: "note" | "board";
}

const ListView: FC<IListViewProps> = ({ variant }) => {
  const params = useParams();
  const id = params.id || "ID not found";

  switch (variant) {
    case "note":
      return (
        <List notesList={findBoardNotes(id)!.boardNotes} variant={variant} />
      );
    case "board":
      return <List boardsList={boardsList} variant={variant} />;
  }
};

export default ListView;
