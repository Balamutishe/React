import { useState } from "react";

import { Button } from "../Button/Button";
import { FormField } from "../Form/ui/FormField";
import { Input } from "../Input/Input";

import "./Menu.css";

export const Menu = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="menu">
      <h1 className="menu__title">Список задач username</h1>
      <div className="menu__search">
        <FormField label="">
          <Input
            name="search"
            value={searchValue}
            type="text"
            placeholder="Поиск"
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </FormField>
      </div>
      <div className="menu__actions">
        <Button variant="button-default" title="Выйти" />
      </div>
    </div>
  );
};
