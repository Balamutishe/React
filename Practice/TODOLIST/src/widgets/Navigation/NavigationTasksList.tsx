import { NavigationLink } from "@widgets/Navigation/NavLink";
import c from "./Navigation.module.css";
import type { FC } from "react";

interface INavigationTasksListProps {
  visible: boolean;
}

export const NavigationTasksList: FC<INavigationTasksListProps> = ({
  visible,
}) => {
  return (
    <div className={c.navTasksList}>
      <ul className={visible ? "" : c.navTasksListInvisible}>
        <li>
          <NavigationLink to="/tasks/1" textLink="Task 1" />
        </li>
        <li>
          <NavigationLink to="/tasks/2" textLink="Task 2" />
        </li>
        <li>
          <NavigationLink to="/tasks/3" textLink="Task 3" />
        </li>
        <li>
          <NavigationLink to="/tasks/4" textLink="Task 4" />
        </li>
        <li>
          <NavigationLink to="/tasks/5" textLink="Task 5" />
        </li>
      </ul>
    </div>
  );
};
