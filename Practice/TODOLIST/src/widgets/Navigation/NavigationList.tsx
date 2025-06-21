import c from "./Navigation.module.css";
import { NavigationLink } from "./NavLink";
import { handleSwitchIcon } from "@shared/utils/handleSwitchIcon";

interface NavigationListProps {
  list: {
    id: string;
    title: string;
    to: string;
  }[];
}

export const NavigationList = ({ list }: NavigationListProps) => {
  return (
    <ul className={c.list}>
      {list.map((item) => (
        <li key={item.id} className={c.listItem}>
          {handleSwitchIcon(item.title)}
          <NavigationLink to={item.to} textLink={item.title} />
        </li>
      ))}
    </ul>
  );
};
