import { TaskCard } from "./TaskCard/TaskCard";
import c from "./TasksList.module.css";

export const TasksList = () => {
  return (
    <ul className={c.tasksList}>
      <li className={c.taskItem}>
        <TaskCard />
      </li>
      <li className={c.taskItem}>
        <TaskCard />
      </li>
      <li className={c.taskItem}>
        <TaskCard />
      </li>
      <li className={c.taskItem}>
        <TaskCard />
      </li>
      <li className={c.taskItem}>
        <TaskCard />
      </li>
      <li className={c.taskItem}>
        <TaskCard />
      </li>
      <li className={c.taskItem}>
        <TaskCard />
      </li>
    </ul>
  );
};
