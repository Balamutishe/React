import {
  SchemaFetchDataRegister,
  useMutateRegister,
  type ModelFetchDataRegister,
} from "@features/Auth/api";
import c from "../AuthForm.module.css";
import { Button } from "@widgets/components";
import type { FC } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormRegister = () => {
  const methods = useForm({
    resolver: zodResolver(SchemaFetchDataRegister),
  });

  const handlerRegister = useMutateRegister();

  const onSubmit = (data: ModelFetchDataRegister) =>
    handlerRegister.mutate(data);

  return (
    <FormProvider {...methods}>
      <form className={c.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className={c.title}>Регистрация</h2>
        <div className={c.inputs}>
          <NestedInput registerName="login" placeholder="Логин" />
          <NestedInput registerName="email" placeholder="E-mail" />
          <NestedInput registerName="password" placeholder="Пароль" />
        </div>
        <Button variant="primary" text="Зарегистрироваться" type="submit" />
      </form>
    </FormProvider>
  );
};

export const NestedInput: FC<{
  registerName: "login" | "email" | "password";
  placeholder: string;
}> = ({ registerName, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ModelFetchDataRegister>();

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
