import { createContext, startTransition, use, useState } from "react";
import { fetchUsers, type User } from "../shared/api/api";

type UsersContextType = {
  usersPromise: Promise<User[]>;
  refetchUsers: () => void;
};

const UsersContext = createContext<UsersContextType | null>(null);

const defaultUsersPromise = fetchUsers();
export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [usersPromise, setUsersPromise] = useState(defaultUsersPromise);

  const refetchUsers = () =>
    startTransition(() => setUsersPromise(fetchUsers()));

  return (
    <UsersContext value={{ usersPromise, refetchUsers }}>
      {children}
    </UsersContext>
  );
};

export const useUsersGlobal = () => {
  const context = use(UsersContext);

  if (!context) throw new Error("useUsers must be used within a UsersProvider");

  return context;
};
