import c from "./Navigation.module.css";
import { NavigationList } from "./NavigationList";
import { NavigationSettings } from "./NavigationSettings";
import { NavigationTitle } from "./NavigationTitle";

export const Navigation = () => {
  return (
    <nav className={c.navigation}>
      <div className={c.navLinks}>
        <NavigationTitle title="TODOMASTER" />
        <NavigationList />
      </div>
      <NavigationSettings />
    </nav>
  );
};
