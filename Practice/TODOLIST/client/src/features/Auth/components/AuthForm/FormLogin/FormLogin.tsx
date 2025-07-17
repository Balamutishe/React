import { FormProvider, useForm, useFormContext } from "react-hook-form";
import type { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SchemaFetchDataLogin,
  useMutateLogin,
  type ModelFetchDataLogin,
} from "@features/Auth/api";
import { Button } from "@widgets/components";

import c from "../AuthForm.module.css";

export const FormLogin = () => {
  const methods = useForm({
    resolver: zodResolver(SchemaFetchDataLogin),
  });

  const handlerLogin = useMutateLogin();

  const onSubmit = (data: ModelFetchDataLogin) => handlerLogin.mutate(data);

  return (
    <FormProvider {...methods}>
      <form className={c.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className={c.title}>Добро пожаловать</h2>
        <div className={c.inputs}>
          <InputLogin registerName="loginOrEmail" placeholder="Логин" />
          <InputLogin registerName="password" placeholder="Пароль" />
        </div>
        <Button variant="primary" text="Войти" type="submit" />
      </form>
    </FormProvider>
  );
};

export const InputLogin: FC<{
  registerName: "loginOrEmail" | "password";
  placeholder: string;
}> = ({ registerName, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ModelFetchDataLogin>();

  return (
    <div className={c.inputContainer}>
      {errors[registerName] && errors[registerName].message && (
        <div style={{ color: "red" }}>
          Errors {registerName}: {errors[registerName].message}
        </div>
      )}
      <input
        className={`${c.input} ${c.inputAuth}`}
        {...register(registerName)}
        placeholder={placeholder}
      />
    </div>
  );
};
