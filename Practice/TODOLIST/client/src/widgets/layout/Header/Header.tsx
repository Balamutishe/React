import { Logout } from "@features/Auth/components/Logout";
import c from "./Header.module.css";
import { useAppSelector } from "@app/redux/store";
export const Header = () => {
  const user = useAppSelector((state) => state.authState.user);

  return (
    <header className={c.header}>
      <h2>HeaderTitle</h2>
      {user && <Logout />}
    </header>
  );
};
