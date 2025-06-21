import c from "./Navigation.module.css";
import { NavigationList } from "./NavigationList";
import { NavigationSettings } from "./NavigationSettings";
import { NavigationTitle } from "./NavigationTitle";

export const Navigation = () => {
  const navListItems = [
    {
      id: crypto.randomUUID(),
      title: "DashBoard",
      to: "/dashboard",
    },
    {
      id: crypto.randomUUID(),
      title: "Tasks",
      to: "/tasks",
    },
    {
      id: crypto.randomUUID(),
      title: "Goals",
      to: "/goals",
    },
    {
      id: crypto.randomUUID(),
      title: "Time",
      to: "/time",
    },
    {
      id: crypto.randomUUID(),
      title: "Calendar",
      to: "/calendar",
    },
  ];

  return (
    <nav className={c.navigation}>
      <div className={c.navLinks}>
        <NavigationTitle title="TODOMASTER" />
        <NavigationList list={navListItems} />
      </div>
      <NavigationSettings />
    </nav>
  );
};
