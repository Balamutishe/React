import { useAppSelector } from "@app/redux/store";
import { AccountSwitchContent } from "./components";
import c from "./Account.module.css";
import { AccountContentView } from "./components/AccountContentView";

export const Account = () => {
  const accountContentType = useAppSelector(
    (state) => state.accountContentType.accountContentType
  );

  return (
    <div className={c.account}>
      <AccountSwitchContent accountContentType={accountContentType} />
      <AccountContentView accountContentType={accountContentType} />
    </div>
  );
};
