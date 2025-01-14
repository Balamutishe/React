import { useDispatch } from "react-redux";
import { toggleFormType } from "../../../../store/switchFormType";

import { Button } from "../../../Button/Button";
import { FormField } from "../FormField";

export const FormRegister = () => {
  const dispatch = useDispatch();

  return (
    <form className="form">
      <h2 className="form__title">Регистрация</h2>
      <div className="form__inputs">
        <FormField label="Введите имя">
          <input type="text" />
        </FormField>
        <FormField label="Введите пароль">
          <input type="password" />
        </FormField>
      </div>
      <Button variant="primary" title="Зарегистрироваться" />
      <div
        onClick={() => dispatch(toggleFormType("login"))}
        className="form__button--switch"
      >
        У меня есть пароль
      </div>
    </form>
  );
};
