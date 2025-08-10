import { Header } from "@shared/ui/Header";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AccountBar } from "@features/Auth";
import { Main } from "@shared/ui/Main";

export const RootLayout = () => {
  return (
    <>
      <Header renderAccountBar={() => <AccountBar />} />
      <Main>
        <Outlet />
      </Main>
      <TanStackRouterDevtools />
    </>
  );
};
