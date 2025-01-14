import { useDispatch } from "react-redux";
import { useState } from "react";

import { toggleFormType } from "../../../../store/switchFormType";
import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";
import { FormField } from "../FormField";

export const FormLogin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="overlay">
      <form className="form">
        <h2 className="form__title">Вход</h2>
        <div className="form__inputs">
          <FormField label="">
            <Input
              name="email"
              value={email}
              type="email"
              placeholder="Электронная почта"
              onChange={(event) => setEmail(event.target.value)}
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
        <Button variant="button-primary" title="Войти" />
        <div
          onClick={() => dispatch(toggleFormType("register"))}
          className="form__button--switch"
        >
          Регистрация
        </div>
      </form>
    </div>
  );
};
