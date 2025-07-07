import c from "./Header.module.css";
import { Search } from "@features/Task/Search";
import { TaskAdd } from "@features/Task/TaskAdd";

export const Header = () => {
  return (
    <div className={c.header}>
      <Search />
      <TaskAdd />
    </div>
  );
};
