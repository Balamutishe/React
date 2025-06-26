import { useState } from "react";
import c from "./Navigation.module.css";
import { NavigationTasksList } from "./NavigationTasksList";
import { NavigationLink } from "./NavLink";
import { handlerSwitchIcon } from "@shared/utils/handlerSwitchIcon";

export const NavigationList = () => {
  const [isTasksListVisible, setIsTasksListVisible] = useState(false);

  const handlerTasksListVisibilityClick = () => {
    setIsTasksListVisible(true);
  };

  const handlerTasksListVisibilityBlur = () => {
    setIsTasksListVisible(false);
  };

  return (
    <ul className={c.list}>
      <li
        key={crypto.randomUUID()}
        className={c.listItem}
        onClick={handlerTasksListVisibilityBlur}
      >
        {handlerSwitchIcon("Dashboard", c.navIcon)}
        <NavigationLink to={"/dashboard"} textLink={"Dashboard"} />
      </li>
      <li
        key={crypto.randomUUID()}
        className={c.listItem}
        onClick={handlerTasksListVisibilityClick}
      >
        <div>
          <div className={c.navTasks}>
            {handlerSwitchIcon("Tasks", c.navIcon)}
            <NavigationLink to={"/tasks"} textLink={"Tasks"} />
            {handlerSwitchIcon(
              "ArrowDown",
              !isTasksListVisible ? c.arrowIcon : c.arrowIconUp
            )}
          </div>
          <NavigationTasksList visible={isTasksListVisible} />
        </div>
      </li>
      <li
        key={crypto.randomUUID()}
        className={c.listItem}
        onClick={handlerTasksListVisibilityBlur}
      >
        {handlerSwitchIcon("Calendar", c.navIcon)}
        <NavigationLink to={"/calendar"} textLink={"Calendar"} />
      </li>
    </ul>
  );
};
