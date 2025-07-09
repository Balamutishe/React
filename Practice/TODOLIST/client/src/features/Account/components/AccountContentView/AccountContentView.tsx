import type { FC } from "react";
import { AccountInfo } from "../AccountInfo";
import { AccountSettings } from "../AccountSettings";

interface IAccountContentViewProps {
  accountContentType: "info" | "settings";
}

export const AccountContentView: FC<IAccountContentViewProps> = ({
  accountContentType,
}) => {
  switch (accountContentType) {
    case "info":
      return <AccountInfo />;
    case "settings":
      return <AccountSettings />;
  }
};
