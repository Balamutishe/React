import { FormEventHandler, useState } from "react";
import { useMutationUserLogin } from "../../hooks/useMutationUserLogin";
import { useMutationUserRegister } from "../../hooks/useMutationUserRegister";

import "./AuthForm.scss";

export const AuthForm = () => {
  const [authStatus, setAuthStatus] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useMutationUserLogin(username, password);
  const userRegister = useMutationUserRegister(username, password);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    switch (authStatus) {
      case "login":
        return userLogin.mutate();
      case "register":
        return userRegister.mutate();
    }
  };

  return (
    <div className="container-form">
      <form className="form-auth" onSubmit={handleFormSubmit}>
        <h2 className="form-auth__title">
          {authStatus === "register" ? "Регистрация" : "Войдите чтобы начать"}
        </h2>

        <div className="form-auth__inputs">
          <input
            className="form-auth__input"
            type="text"
            name="username"
            placeholder="Введите имя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="form-auth__input"
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="form-auth__button" type="submit">
          {authStatus === "login" ? "Войти" : "Зарегистрироваться"}
        </button>
        <div
          className="form-auth__switch"
          onClick={() =>
            setAuthStatus((status) =>
              status === "login" ? "register" : "login"
            )
          }
        >
          {authStatus === "login"
            ? "Еще нет аккаунта?"
            : "Уже зарегистрированы"}
        </div>
      </form>
    </div>
  );
};
