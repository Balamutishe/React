import { FC, useState } from "react";
import { useMutationUserLogout } from "../../hooks/useMutationUserLogout";

import "./Header.scss";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

interface IHeaderProps {
  authState: boolean;
  username?: string;
}

export const Header: FC<IHeaderProps> = ({ authState, username }) => {
  const [searchValue, setSearchValue] = useState("");
  const logoutUser = useMutationUserLogout();

  return (
    <header className="container-flex container-child header">
      <h1 className="header__username">
        {authState
          ? `Список дел ${username}`
          : "Начните планировать свой день!)"}
      </h1>
      {authState && (
        <div className="header__actions">
          <Input
            type="text"
            name="search"
            value={searchValue}
            placeholder="Поиск"
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <Button onClick={() => logoutUser.mutate()}>Выйти</Button>
        </div>
      )}
    </header>
  );
};
