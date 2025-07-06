import c from "./Header.module.css";
import { Search } from "@features/Search";
import { TaskAdd } from "@features/TaskAdd";

export const Header = () => {
  return (
    <div className={c.header}>
      <Search />
      <TaskAdd />
    </div>
  );
};
