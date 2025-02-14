import { useState } from "react";
import { useSelector } from "react-redux";
import { useMutationUserLogout } from "../../hooks/useMutationUserLogout";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { RootState } from "../../redux";

import "./Header.scss";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const userData = useSelector((state: RootState) => state.userData);
  const logoutUser = useMutationUserLogout();

  return (
    <header className="container-flex container-child header">
      <h1 className="header__username">
        {userData.authStatusUser === "success"
          ? `Список дел ${userData.username}`
          : "Начните планировать свой день!)"}
      </h1>
      {userData.authStatusUser === "success" && (
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
