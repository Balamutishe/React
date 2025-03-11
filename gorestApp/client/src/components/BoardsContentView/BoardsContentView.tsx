import { BoardsListView } from "../List/BoardsListView";
import "./BoardsContentView.scss";

export const BoardsContentView = () => {
  return (
    <div className="boards">
      <BoardsListView />
    </div>
  );
};
