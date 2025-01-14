import { Button } from "../../../Button/Button";

export const FormSuccess = () => {
  return (
    <form className="form">
      <h2 className="form__title">Регистрация</h2>
      <p className="form__text">Используйте вашу электронную почту для входа</p>
      <Button variant="primary" title="Войти" />
    </form>
  );
};
