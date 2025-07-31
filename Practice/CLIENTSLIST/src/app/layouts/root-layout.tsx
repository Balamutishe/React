import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "@widgets/header";
import { Main } from "@widgets/main";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <Main />
      <TanStackRouterDevtools />
    </>
  );
};
