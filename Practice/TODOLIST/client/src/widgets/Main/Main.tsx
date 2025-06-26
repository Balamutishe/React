import { AppRouter } from "@app/AppRouter";
import c from "./Main.module.css";

export const Main = () => {
  return (
    <main className={c.main}>
      <AppRouter />
    </main>
  );
};
