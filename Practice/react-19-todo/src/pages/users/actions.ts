import { createUser, deleteUser, type User } from "../../shared/api/api";

type CreateActionState = {
  error?: string;
  email: string;
};

export type CreateUserAction = (
  state: CreateActionState,
  formData: FormData
) => Promise<CreateActionState>;

export const createUserAction =
  ({
    refetchUsers,
    optimisticCreate,
  }: {
    refetchUsers: () => void;
    optimisticCreate: (user: User) => void;
  }): CreateUserAction =>
  async (_, formData) => {
    const email = formData.get("email") as string;

    try {
      const user = {
        email,
        id: crypto.randomUUID(),
      };

      optimisticCreate(user);
      await createUser(user);

      refetchUsers();

      return {
        email: "",
      };
    } catch {
      return {
        email,
        error: "Error while creating user",
      };
    }
  };

type DeleteActionState = {
  error?: string;
};

export type DeleteUserAction = (
  state: DeleteActionState,
  formData: FormData
) => Promise<DeleteActionState>;

export const deleteUserAction =
  ({
    refetchUsers,
    optimisticDelete,
  }: {
    refetchUsers: () => void;
    optimisticDelete: (id: string) => void;
  }): DeleteUserAction =>
  async (_, formData) => {
    const id = formData.get("id") as string;
    try {
      optimisticDelete(id);
      await deleteUser(id);
      refetchUsers();
      return {};
    } catch {
      return {
        error: "Error while deleting user",
      };
    }
  };
