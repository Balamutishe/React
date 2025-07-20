import { createTask, deleteTask } from "../../shared/api/api";

type CreateActionState = {
  error?: string;
  title: string;
};

export type CreateTaskAction = (
  state: CreateActionState,
  formData: FormData
) => Promise<CreateActionState>;

export const createTaskAction =
  ({
    userId,
    refetchTasks,
  }: {
    userId: string;
    refetchTasks: () => void;
  }): CreateTaskAction =>
  async (_, formData) => {
    const title = formData.get("title") as string;

    try {
      const task = {
        id: crypto.randomUUID(),
        userId,
        title,
        done: false,
        createdAt: Date.now().toString(),
      };

      await createTask(task);

      refetchTasks();

      return {
        title: "",
      };
    } catch {
      return {
        title,
        error: "Error while creating user",
      };
    }
  };

type DeleteActionState = {
  error?: string;
};

export type DeleteTaskAction = (
  state: DeleteActionState,
  formData: FormData
) => Promise<DeleteActionState>;

export const deleteTaskAction =
  ({ refetchTasks }: { refetchTasks: () => void }): DeleteTaskAction =>
  async (_, formData) => {
    const id = formData.get("id") as string;
    try {
      await deleteTask(id);
      refetchTasks();
      return {};
    } catch {
      return {
        error: "Error while deleting user",
      };
    }
  };
