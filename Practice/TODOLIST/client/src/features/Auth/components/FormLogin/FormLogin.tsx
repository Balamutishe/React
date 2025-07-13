import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import {
  useMutateLogin,
  type ModelFetchDataLogin,
  SchemaFetchDataLogin,
} from "../../api";
import { Button } from "@widgets/components";

import c from "./FormLogin.module.css";

interface IFormLogin {
  handlerSetFormTypes: (formType: "register") => void;
}

export const FormLogin: FC<IFormLogin> = ({ handlerSetFormTypes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModelFetchDataLogin>({
    resolver: zodResolver(SchemaFetchDataLogin),
  });
  const handlerLogin = useMutateLogin();

  return (
    <div className={c.formContainer}>
      <form
        className={c.form}
        onSubmit={handleSubmit(async (loginData) => {
          handlerLogin.mutate(loginData);
        })}
      >
        <h2 className={c.title}>Войдите чтобы начать</h2>
        <div className={c.inputs}>
          <div className={c.inputContainer}>
            {errors.loginOrEmail && errors.loginOrEmail.message && (
              <div style={{ color: "red" }}>
                Errors loginOrEmail: {errors.loginOrEmail.message}
              </div>
            )}
            <input
              className={`${c.input} ${c.inputAuth}`}
              {...register("loginOrEmail")}
              placeholder="Логин или e-mail"
            />
          </div>
          <div className={c.inputContainer}>
            {errors.password && errors.password.message && (
              <div style={{ color: "red" }}>
                Errors password: {errors.password.message}
              </div>
            )}
            <input
              className={`${c.input} ${c.inputAuth}`}
              {...register("password")}
              placeholder="Пароль"
            />
          </div>
        </div>
        <Button variant="primary" text="Войти" type="submit" />
      </form>
      <Button
        onClick={() => handlerSetFormTypes("register")}
        variant="secondary"
        text="Еще нет аккаунта?"
        type="button"
      />
    </div>
  );
};
