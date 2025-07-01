import { TTaskBody, TCollectionTasks, TTasksList, TTask } from "../types";
import { DeleteResult, InsertOneResult, UpdateResult, WithId } from "mongodb";
import { taskCreate, taskDelete, tasksFind, tasksUpdate } from "../repository";

export const tasksService = {
  async tasksFind(
    collection: TCollectionTasks,
    id?: string | null,
    searchData?: string
  ): Promise<WithId<TTasksList> | WithId<TTasksList>[] | null> {
    if (id) return await tasksFind(collection, id);

    if (searchData) return await tasksFind(collection, null, searchData);

    return await tasksFind(collection);
  },

  async taskCreate(
    collection: TCollectionTasks,
    taskData: TTaskBody
  ): Promise<InsertOneResult<TTasksList>> {
    const newTask = {
      title: taskData.title ? taskData.title : "New task",
      status: "not completed",
      description: taskData.description
        ? taskData.description
        : "Task description",
      priority: taskData.priority ? taskData.priority : "low",
      due_date: new Date().toDateString(),
    };

    // @ts-ignore
    return await taskCreate(collection, newTask);
  },

  async taskUpdate(
    collection: TCollectionTasks,
    id: string,
    dataUpdate: TTaskBody
  ): Promise<UpdateResult<TTasksList>> {
    return await tasksUpdate(collection, id, dataUpdate);
  },

  async taskDelete(
    collection: TCollectionTasks,
    id: string
  ): Promise<DeleteResult> {
    return await taskDelete(collection, id);
  },
};
