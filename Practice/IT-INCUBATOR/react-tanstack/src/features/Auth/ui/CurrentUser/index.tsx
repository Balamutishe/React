import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { LogoutButton } from "../LogoutButton";

interface IProps {
  userData: {
    userId: string;
    login: string;
  };
}

export const CurrentUser: FC<IProps> = ({ userData }) => {
  return (
    <div>
      <Link to="/my-playlists" activeOptions={{ exact: true }}>
        {userData.login} <LogoutButton />
      </Link>
    </div>
  );
};
