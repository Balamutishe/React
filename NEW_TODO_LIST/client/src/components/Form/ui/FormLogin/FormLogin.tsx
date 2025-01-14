import { useDispatch } from "react-redux";
import { useState } from "react";

import { toggleFormType } from "../../../../store/switchFormType";
import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";
import { FormField } from "../FormField";

export const FormLogin = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form">
      <h2 className="form__title">Вход</h2>
      <div className="form__inputs">
        <FormField label="">
          <Input
            name="name"
            value={name}
            type="text"
            placeholder="Имя"
            onChange={(event) => setName(event.target.value)}
          />
        </FormField>
        <FormField label="">
          <Input
            name="password"
            value={password}
            type="password"
            placeholder="Пароль"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormField>
      </div>
      <Button variant="primary" title="Войти" />
      <div
        onClick={() => dispatch(toggleFormType("register"))}
        className="form__button--switch"
      >
        Регистрация
      </div>
    </form>
  );
};
