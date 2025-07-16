import { Account } from "@features/Account";
import { Auth } from "@features/Auth";
import { useQueryRefresh } from "@features/Auth/api";

export const AccountPage = () => {
  const refreshResult = useQueryRefresh();

  switch (refreshResult.status) {
    case "error":
      return <Auth />;
    case "success":
      return (
        <div>
          <Account />
        </div>
      );
    case "pending":
      return <p>Загрузка...</p>;
  }
};
