import { Link } from "@tanstack/react-router";
import type { FC } from "react";

import c from "./style.module.css";

interface IProps {
  renderAccountBar: () => React.ReactNode;
}

export const Header: FC<IProps> = ({ renderAccountBar }) => {
  return (
    <header className={c.header}>
      <div className={c.linksBlock}>
        <Link to="/">Playlists</Link>
        <Link to="/my-playlists">My Playlists</Link>
        <Link to="/oauth/callback">temp page</Link>
      </div>

      <div>{renderAccountBar()}</div>
    </header>
  );
};
