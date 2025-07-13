import { Account } from "@features/Account";
import { Auth } from "@features/Auth";
import { useQueryRefresh } from "@features/Auth/api";
import { Logout } from "@features/Auth/components/Logout";

export const AccountPage = () => {
  const refreshResult = useQueryRefresh();

  switch (refreshResult.status) {
    case "error":
      return <Auth />;
    case "success":
      return (
        <div>
          <Account />
          <Logout />
        </div>
      );
    case "pending":
      return <p>Загрузка...</p>;
  }
};
