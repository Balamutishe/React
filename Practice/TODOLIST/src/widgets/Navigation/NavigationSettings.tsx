import { Button } from "@shared/components/Button/Button";
import { handlerSwitchIcon } from "@shared/utils/handlerSwitchIcon";
import c from "./Navigation.module.css";

export const NavigationSettings = () => {
  return (
    <div className={c.navSettings}>
      <Button text="Settings" children={handlerSwitchIcon("Settings")} />
      <Button text="Logout" children={handlerSwitchIcon("Logout")} />
    </div>
  );
};
