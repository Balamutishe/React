import { useLogoutMutation } from "@features/Auth/api";

export const LogoutButton = () => {
  const mutation = useLogoutMutation();

  const handleLogoutClick = () => {
    mutation.mutate();
  };

  return <button onClick={handleLogoutClick}>Logout</button>;
};
