import { AppRouter } from "@app/AppRouter";
import c from "./Main.module.css";
import { useQueryRefresh } from "@features/Auth/api";
import { Auth } from "@features/Auth";

export const Main = () => {
  const resultAuth = useQueryRefresh();

  switch (resultAuth.status) {
    case "error":
      return (
        <main className={c.main}>
          <Auth />
        </main>
      );
    case "success":
      return (
        <main className={c.main}>
          <AppRouter />
        </main>
      );
    case "pending":
      return <div>Загрузка...</div>;
  }
};
