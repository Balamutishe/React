import { useAppSelector } from "@app/redux/store";
import { dateTimeUpdate } from "@shared/utils/dateTimeUpdate";
import c from "./AccountInfo.module.css";

export const AccountInfo = () => {
  const userData = useAppSelector((state) => state.authState.user);

  if (!userData) {
    return <div>Данные о пользователе не найдены</div>;
  }

  return (
    <div className={c.accountInfo}>
      <div>Username: {userData.userName}</div>
      <div>Email: {userData.email}</div>
      <div>Created at: {dateTimeUpdate(userData.createdAt, "account")}</div>
    </div>
  );
};
