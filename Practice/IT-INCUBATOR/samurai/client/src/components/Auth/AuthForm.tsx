import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutateUserLogin, useMutateUserRegister } from "../../hooks/api";
import c from "./AuthForm.module.css";

type TAuthFormData = {
  username: string;
  password: string;
};

const AuthFormSchema = z.object({
  username: z.string().min(3, "Введите не менее 3 символов"),
  password: z.string().min(5, "Введите не менее 5 символов"),
});

export const AuthForm = () => {
  const [authState, setAuthState] = useState("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthFormData>({ resolver: zodResolver(AuthFormSchema) });

  const userRegister = useMutateUserRegister();
  const userLogin = useMutateUserLogin();

  const handleAuthStateChange = () =>
    setAuthState((authState) => (authState === "login" ? "register" : "login"));

  return (
    <div className={c.formContainer}>
      <form
        className={c.form}
        onSubmit={handleSubmit((authData) => {
          return authState === "login"
            ? userLogin.mutate(authData)
            : userRegister.mutate(authData);
        })}
      >
        <h2 className={c.title}>
          {authState === "register" ? "Регистрация" : "Войдите чтобы начать"}
        </h2>
        <div className={c.inputs}>
          {errors.username?.message && (
            <div style={{ color: "red" }}>
              Errors username: {errors.username?.message}
            </div>
          )}
          {errors.password?.message && (
            <div style={{ color: "red" }}>
              Errors password: {errors.password?.message}
            </div>
          )}
          <input
            className={`${c.input} ${c.inputAuth}`}
            {...register("username")}
          />
          <input
            className={`${c.input} ${c.inputAuth}`}
            {...register("password")}
          />
        </div>
        <button>
          {authState === "login" ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>
      <button onClick={handleAuthStateChange}>
        {authState === "login" ? "Еще нет аккаунта?" : "Уже зарегистрированы?"}
      </button>
    </div>
  );
};
