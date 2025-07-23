import { Header } from "@shared/ui/Header";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import c from "./root-layout.module.css";

export const RootLayout = () => {
  return (
    <>
      <div className={c.containerHeader}>
        <Header renderAccountBar={() => <div>Account</div>} />
      </div>
      <div className={c.containerMain}>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
};
