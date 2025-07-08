import { TaskCard } from "@features/Task";
import c from "./List.module.css";

export const List = () => {
  return (
    <ul className={c.list}>
      <li className={c.listItem}>
        <TaskCard />
      </li>
      <li className={c.listItem}>
        <TaskCard />
      </li>
      <li className={c.listItem}>
        <TaskCard />
      </li>
      <li className={c.listItem}>
        <TaskCard />
      </li>
      <li className={c.listItem}>
        <TaskCard />
      </li>
      <li className={c.listItem}>
        <TaskCard />
      </li>
      <li className={c.listItem}>
        <TaskCard />
      </li>
    </ul>
  );
};
