import c from "./Header.module.css";
import { Search } from "@features/Task/components/Search";
import { TaskAdd } from "@features/Task/components/TaskAdd";

export const Header = () => {
  return (
    <div className={c.header}>
      <Search />
      <TaskAdd />
    </div>
  );
};
