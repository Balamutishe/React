import type { FC } from "react";
import { NavLink } from "react-router";
import c from "./Navigation.module.css";

interface NavigationLinkProps {
  to: string;
  textLink: string;
}

export const NavigationLink: FC<NavigationLinkProps> = ({ to, textLink }) => {
  return (
    <NavLink to={to} className={c.navLink}>
      {textLink}
    </NavLink>
  );
};
