import { useDispatch } from "react-redux";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { toggleFormType } from "../../../../store/switchFormType";
import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";
import { FormField } from "../FormField";
import { queryClient } from "../../../../api/queryClient";
import { loginUser } from "../../../../api/User";

export const FormLogin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUserMutate = useMutation(
    {
      mutationFn: () => loginUser({ email, password }),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["users", "me"] });
      },
    },
    queryClient
  );

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        loginUserMutate.mutate();
      }}
    >
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
  );
};
