import { useState } from "react";
import c from "./Navigation.module.css";
import { NavigationTasksList } from "./NavigationTasksList";
import { NavigationLink } from "./NavLink";
import { handleSwitchIcon } from "@shared/utils/handleSwitchIcon";

export const NavigationList = () => {
  const [isTasksListVisible, setIsTasksListVisible] = useState(false);

  const handlerTasksListVisibility = () => {
    setIsTasksListVisible((prev) => !prev);
  };

  return (
    <ul className={c.list}>
      <li key={crypto.randomUUID()} className={c.listItem}>
        {handleSwitchIcon("Dashboard", c.navIcon)}
        <NavigationLink to={"/dashboard"} textLink={"Dashboard"} />
      </li>
      <li
        key={crypto.randomUUID()}
        className={c.listItem}
        onClick={handlerTasksListVisibility}
      >
        <div>
          <div className={c.navTasks}>
            {handleSwitchIcon("Tasks", c.navIcon)}
            <NavigationLink to={"/tasks"} textLink={"Tasks"} />
            {handleSwitchIcon(
              "ArrowDown",
              !isTasksListVisible ? c.arrowIcon : c.arrowIconUp
            )}
          </div>
          <NavigationTasksList visible={isTasksListVisible} />
        </div>
      </li>
      <li key={crypto.randomUUID()} className={c.listItem}>
        {handleSwitchIcon("Calendar", c.navIcon)}
        <NavigationLink to={"/calendar"} textLink={"Calendar"} />
      </li>
    </ul>
  );
};
