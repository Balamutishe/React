import { ReactNode, FC } from "react";

interface IMainProps {
  children: ReactNode;
}

import "./Main.scss";

export const Main: FC<IMainProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};
