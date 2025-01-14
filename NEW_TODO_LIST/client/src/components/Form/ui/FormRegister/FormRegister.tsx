import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFormType } from "../../../../store/switchFormType";
import { useMutation } from "@tanstack/react-query";

import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";
import { FormField } from "../FormField";
import { queryClient } from "../../../../api/queryClient";
import { registerUser } from "../../../../api/User";

export const FormRegister = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUserMutation = useMutation(
    {
      mutationFn: () => registerUser({ username, email, password }),
    },
    queryClient
  );

  return (
    <div className="overlay">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          registerUserMutation.mutate();
        }}
      >
        <h2 className="form__title">Регистрация</h2>
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
              name="name"
              value={username}
              type="text"
              placeholder="Имя"
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormField>
          <FormField label="">
            <Input
              name="surname"
              value={surname}
              type="text"
              placeholder="Фамилия"
              onChange={(event) => setSurname(event.target.value)}
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
          <FormField label="">
            <Input
              name="confirmPassword"
              value={confirmPassword}
              type="password"
              placeholder="Подтвердите пароль"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </FormField>
        </div>
        <Button variant="button-primary" title="Зарегистрироваться" />
        <div
          onClick={() => dispatch(toggleFormType("login"))}
          className="form__button--switch"
        >
          У меня есть пароль
        </div>
      </form>
    </div>
  );
};
