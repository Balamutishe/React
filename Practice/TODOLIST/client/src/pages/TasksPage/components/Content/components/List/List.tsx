import { Card } from "./Card";
import c from "./List.module.css";

export const List = () => {
  return (
    <ul className={c.tasksList}>
      <li className={c.taskItem}>
        <Card />
      </li>
      <li className={c.taskItem}>
        <Card />
      </li>
      <li className={c.taskItem}>
        <Card />
      </li>
      <li className={c.taskItem}>
        <Card />
      </li>
      <li className={c.taskItem}>
        <Card />
      </li>
      <li className={c.taskItem}>
        <Card />
      </li>
      <li className={c.taskItem}>
        <Card />
      </li>
    </ul>
  );
};
