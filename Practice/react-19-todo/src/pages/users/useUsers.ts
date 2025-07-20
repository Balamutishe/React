import { useOptimistic, use } from "react";
import { type User } from "../../shared/api/api";
import { createUserAction, deleteUserAction } from "./actions";
import { useUsersGlobal } from "../../entities/user";

export const useUsers = () => {
  const { refetchUsers, usersPromise } = useUsersGlobal();

  const [createdUsers, optimisticCreate] = useOptimistic(
    [] as User[],
    (createdUsers, user: User) => [...createdUsers, user]
  );
  const [deletedUsersIds, optimisticDelete] = useOptimistic(
    [] as string[],
    (deletedUsers, id: string) => deletedUsers.concat(id)
  );

  const useUsersList = () => {
    const users = use(usersPromise);

    return users
      .concat(createdUsers)
      .filter((u) => !deletedUsersIds.includes(u.id));
  };

  return {
    createUserAction: createUserAction({ refetchUsers, optimisticCreate }),
    deleteUserAction: deleteUserAction({ refetchUsers, optimisticDelete }),

    useUsersList,
  } as const;
};
