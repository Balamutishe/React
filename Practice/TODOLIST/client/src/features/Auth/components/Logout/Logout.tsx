import { useMutateLogout } from "@features/Auth/api";
import { Button } from "@widgets/components";

export const Logout = () => {
  const handlerLogout = useMutateLogout();

  return (
    <Button
      type="button"
      variant="danger"
      text="Выйти из аккаунта"
      onClick={() => handlerLogout.mutate()}
    />
  );
};
