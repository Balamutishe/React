import type { FC } from "react";
import { Button } from "@widgets/components/Button/Button";
import { useAppDispatch } from "@app/redux/store";
import { setAccountContent } from "./slices";

import c from "./AccountSwitchContent.module.css";

interface IAccountSwitchContentProps {
  accountContentType: "info" | "settings";
}

export const AccountSwitchContent: FC<IAccountSwitchContentProps> = ({
  accountContentType,
}) => {
  const dispatch = useAppDispatch();

  const handlerAccountTypeSwitch = (typeContent: "info" | "settings") =>
    dispatch(setAccountContent(typeContent));

  return (
    <div className={c.buttonsSwitcher}>
      <Button
        text="Info"
        variant={accountContentType === "info" ? "primary" : "secondary"}
        onClick={() => handlerAccountTypeSwitch("info")}
      />
      <Button
        text="Settings"
        variant={accountContentType === "settings" ? "primary" : "secondary"}
        onClick={() => handlerAccountTypeSwitch("settings")}
      />
    </div>
  );
};
