import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { Button } from "../Button/Button";
import { FormField } from "../Form/ui/FormField";
import { Input } from "../Input/Input";
import { queryClient } from "../../api/queryClient";
import { logoutUser } from "../../api/User";

import "./Menu.css";

export const Menu = () => {
  const [searchValue, setSearchValue] = useState("");

  const logoutUserMutate = useMutation(
    {
      mutationFn: () => logoutUser(),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["users", "me"] });
      },
    },
    queryClient
  );

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
        <Button
          variant="button-default"
          title="Выйти"
          onClick={() => logoutUserMutate.mutate()}
        />
      </div>
    </div>
  );
};
