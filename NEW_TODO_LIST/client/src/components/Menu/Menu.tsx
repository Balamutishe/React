import { Button } from "../Button/Button";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__title">Список задач username</div>
      <div className="menu__search"></div>
      <div className="menu__actions">
        <Button variant="default" title="Выйти" />
      </div>
    </div>
  );
};
