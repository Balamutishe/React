import { FormEventHandler, useState } from "react";
import { useMutationUserLogin } from "../../hooks/useMutationUserLogin";
import { useMutationUserRegister } from "../../hooks/useMutationUserRegister";

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
    <>
      {authStatus === "register" && <title>Регистрация</title>}
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Введите имя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">
          {authStatus === "login" ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>
      <button
        onClick={() =>
          setAuthStatus((status) => (status === "login" ? "register" : "login"))
        }
      >
        {authStatus === "login" ? "Еще нет аккаунта?" : "Уже зарегистрированы"}
      </button>
    </>
  );
};
