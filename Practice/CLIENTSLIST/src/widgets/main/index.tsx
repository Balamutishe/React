import { Outlet } from "@tanstack/react-router";

export const Main = () => {
  return (
    <main className="w-full py-12 px-4">
      <Outlet />
    </main>
  );
};
