import { useDispatch } from "react-redux";
import { toggleFormType } from "../../../../store/switchFormType";

import { Button } from "../../../Button/Button";
import { FormField } from "../FormField";

export const FormLogin = () => {
  const dispatch = useDispatch();

  return (
    <form className="form">
      <h2 className="form__title">Вход</h2>
      <div className="form__inputs">
        <FormField label="Введите имя">
          <input type="text" />
        </FormField>
        <FormField label="Введите пароль">
          <input type="password" />
        </FormField>
      </div>
      <Button variant="primary" title="Войти" />
      <div
        onClick={() => dispatch(toggleFormType("register"))}
        className="form__button--switch"
      >
        Регистрация
      </div>
    </form>
  );
};
