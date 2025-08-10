import type { FC, ReactNode } from "react";
import c from "./main.module.css";

interface IProps {
  children: ReactNode;
}

export const Main: FC<IProps> = ({ children }) => {
  return <main className={c.main}>{children}</main>;
};
