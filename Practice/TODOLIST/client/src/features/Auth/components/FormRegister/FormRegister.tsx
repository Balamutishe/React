import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FC } from "react";
import {
  useMutateRegister,
  type ModelFetchDataRegister,
  SchemaFetchDataRegister,
} from "../../api";
import { Button } from "@widgets/components";

import c from "./FormRegister.module.css";

interface IFormRegister {
  handlerSetFormTypes: (formType: "login") => void;
}

export const FormRegister: FC<IFormRegister> = ({ handlerSetFormTypes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModelFetchDataRegister>({
    resolver: zodResolver(SchemaFetchDataRegister),
  });
  const handlerRegister = useMutateRegister();

  return (
    <div className={c.formContainer}>
      <form
        className={c.form}
        onSubmit={handleSubmit((registerData) =>
          handlerRegister.mutate(registerData)
        )}
      >
        <h2 className={c.title}>Регистрация</h2>
        <div className={c.inputs}>
          <div className={c.inputContainer}>
            {errors.login && errors.login.message && (
              <div style={{ color: "red" }}>
                Errors login: {errors.login.message}
              </div>
            )}
            <input
              className={`${c.input} ${c.inputAuth}`}
              {...register("login")}
              placeholder="Логин"
            />
          </div>
          <div className={c.inputContainer}>
            {errors.email && errors.email.message && (
              <div style={{ color: "red" }}>
                Errors email: {errors.email.message}
              </div>
            )}
            <input
              className={`${c.input} ${c.inputAuth}`}
              {...register("email")}
              placeholder="E-mail"
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
        <Button variant="primary" text="Зарегистрироваться" type="submit" />
      </form>
      <Button
        onClick={() => handlerSetFormTypes("login")}
        variant="secondary"
        text="Уже есть аккаунт?"
        type="button"
      />
    </div>
  );
};
