import c from "./AccountSettings.module.css";

export const AccountSettings = () => {
  return (
    <div className={c.accountSettings}>
      <div>Change account (login, email, password)</div>
      <div>Delete account</div>
    </div>
  );
};
