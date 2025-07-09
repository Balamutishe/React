import c from "./AccountInfo.module.css";

export const AccountInfo = () => {
  return (
    <div className={c.accountInfo}>
      <div>Username</div>
      <div style={{ marginBottom: "10px" }}>
        <div>UserDescription</div>
        <div>UserDescription</div>
        <div>UserDescription</div>
        <div>UserDescription</div>
      </div>
    </div>
  );
};
