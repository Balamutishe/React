import { Outlet } from "@tanstack/react-router";

export const Main = () => {
  return (
    <main className="py-12 px-4">
      <Outlet />
    </main>
  );
};
