import { Button } from "@widgets/components";

export const Account = () => {
  return (
    <div>
      <div>
        <div>Username</div>
        <div style={{ marginBottom: "10px" }}>
          <div>UserDescription</div>
          <div>UserDescription</div>
          <div>UserDescription</div>
          <div>UserDescription</div>
        </div>
        <Button type="button" variant="danger" text="Выйти" />
      </div>
    </div>
  );
};
