import { Header } from "@widgets/Header";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="py-12 px-4">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
};
