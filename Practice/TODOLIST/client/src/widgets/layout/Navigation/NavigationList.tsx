import c from "./Navigation.module.css";
import { NavigationLink } from "./NavigationLink";
import { handlerSwitchIcon } from "@shared/utils/handlerSwitchIcon";

export const NavigationList = () => {
  return (
    <ul className={c.list}>
      <li key={crypto.randomUUID()} className={c.listItem}>
        <NavigationLink to={"/"} textLink={"Main"} />
      </li>
      <li key={crypto.randomUUID()} className={c.listItem}>
        {handlerSwitchIcon("Dashboard", c.navIcon)}
        <NavigationLink to={"/dashboard"} textLink={"Dashboard"} />
      </li>
      <li key={crypto.randomUUID()} className={c.listItem}>
        {handlerSwitchIcon("Tasks", c.navIcon)}
        <NavigationLink to={"/tasks"} textLink={"Tasks"} />
      </li>
      <li key={crypto.randomUUID()} className={c.listItem}>
        {handlerSwitchIcon("Calendar", c.navIcon)}
        <NavigationLink to={"/calendar"} textLink={"Calendar"} />
      </li>
    </ul>
  );
};
