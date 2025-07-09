import c from "./AccountSettings.module.css";

export const AccountSettings = () => {
  return (
    <div className={c.accountSettings}>
      <div>Change account (login, email, password)</div>
      <div>Change username</div>
      <div>Change descriptions</div>
      <div>Delete account</div>
      <div>Logout</div>
    </div>
  );
};
