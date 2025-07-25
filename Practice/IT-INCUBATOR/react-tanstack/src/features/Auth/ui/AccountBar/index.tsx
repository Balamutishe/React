import { LoginButton } from "../LoginButton";
import { CurrentUser } from "../CurrentUser";
import { useMeQuery } from "@features/Auth/api";

export const AccountBar = () => {
  const userData = useMeQuery();

  return (
    <div>
      {!userData.data && <LoginButton />}
      {userData.data && <CurrentUser userData={userData.data} />}
    </div>
  );
};
