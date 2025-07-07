import { Card } from "../Card";
import c from "./List.module.css";

export const List = () => {
  return (
    <ul className={c.list}>
      <li className={c.listItem}>
        <Card />
      </li>
      <li className={c.listItem}>
        <Card />
      </li>
      <li className={c.listItem}>
        <Card />
      </li>
      <li className={c.listItem}>
        <Card />
      </li>
      <li className={c.listItem}>
        <Card />
      </li>
      <li className={c.listItem}>
        <Card />
      </li>
      <li className={c.listItem}>
        <Card />
      </li>
    </ul>
  );
};
