import { Button } from "@shared/components/Button/Button";
import { handleSwitchIcon } from "@shared/utils/handleSwitchIcon";
import c from "./Navigation.module.css";

export const NavigationSettings = () => {
  return (
    <div className={c.navSettings}>
      <Button text="Settings" children={handleSwitchIcon("Settings")} />
      <Button text="Logout" children={handleSwitchIcon("Logout")} />
    </div>
  );
};
