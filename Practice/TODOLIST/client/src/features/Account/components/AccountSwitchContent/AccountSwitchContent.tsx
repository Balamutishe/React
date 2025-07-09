import { Button } from "@widgets/components/Button/Button";
import c from "./AccountSwitchContent.module.css";
import { useAppDispatch } from "@app/redux/store";
import { setAccountContent } from "./slices";
import type { FC } from "react";

interface IAccountSwitchContentProps {
  accountContentType: "info" | "settings";
}

export const AccountSwitchContent: FC<IAccountSwitchContentProps> = ({
  accountContentType,
}) => {
  const dispatch = useAppDispatch();

  const handlerAccountTypeSwitch = (typeContent: string) =>
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
