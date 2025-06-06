import { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router";

import { useQueryMe } from "../../hooks/api";
import { AuthForm } from "../Auth/AuthForm.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { Navbar } from "../Navbar/Navbar.tsx";
import c from "./Main.module.css";

const LazyProfile = lazy(
  () => import("../../pages/ProfilePage/ProfilePage.tsx")
);
const LazyDialogs = lazy(
  () => import("../../pages/DialogsPage/DialogsPage.tsx")
);
const LazyUsersView = lazy(() => import("../../pages/UsersPage/UsersPage.tsx"));
const MemoNavbar = memo(Navbar);

export const Main = () => {
  const { status } = useQueryMe();

  if (status === "pending") return <Loader />;
  if (status === "error") return <AuthForm />;

  return (
    <main className={c.main}>
      <section className={c.navbar}>
        <MemoNavbar />
      </section>
      <section className={c.routes}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={"/"} element={<LazyProfile />} />
            <Route
              path={"/dialogs/:chatId?/:page?"}
              element={<LazyDialogs />}
            />
            <Route path={"/users/:page?"} element={<LazyUsersView />} />
          </Routes>
        </Suspense>
      </section>
    </main>
  );
};
