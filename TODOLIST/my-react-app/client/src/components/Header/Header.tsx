import { FC } from "react";

import "./Header.scss";
import { useMutationUserLogout } from "../../hooks/useMutationUserLogout";

interface IHeaderProps {
  authState: boolean;
  username?: string;
}

export const Header: FC<IHeaderProps> = ({ authState, username }) => {
  const logoutUser = useMutationUserLogout();

  return (
    <header className="header">
      <h1 className="header__username">
        {authState
          ? `Список дел ${username}`
          : "Начните планировать свой день!)"}
      </h1>
      <input className="header__input" type="text" placeholder="Поиск" />

      <button className="header__button" onClick={() => logoutUser.mutate()}>
        Выйти
      </button>
    </header>
  );
};
