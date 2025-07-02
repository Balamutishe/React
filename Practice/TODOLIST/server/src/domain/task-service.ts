import { TTaskBody, TCollectionTasks, TTasksList, TTask } from "../types";
import { DeleteResult, InsertOneResult, UpdateResult, WithId } from "mongodb";
import { tasksRepository } from "../repository";

export const tasksService = {
  async tasksFindAll(
    collection: TCollectionTasks,
    pageSize: number,
    pageNumber: number
  ): Promise<WithId<TTasksList>[]> {
    const elementsCount = await tasksRepository.tasksCountGet(collection);

    const pagesCount = Math.ceil(pageSize / elementsCount);
    const skipValue = (pageNumber - 1) * pageSize;

    return await tasksRepository.tasksFindAll(collection, pageSize, skipValue);
  },

  async taskFindById(
    collection: TCollectionTasks,
    id: string
  ): Promise<WithId<TTasksList> | null> {
    return await tasksRepository.taskFindById(collection, id);
  },

  async taskFindByFilter(
    collection: TCollectionTasks,
    searchData: string
  ): Promise<WithId<TTasksList>[]> {
    return await tasksRepository.taskFindByFilter(collection, searchData);
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
    return await tasksRepository.taskCreate(collection, newTask);
  },

  async taskUpdate(
    collection: TCollectionTasks,
    id: string,
    dataUpdate: TTaskBody
  ): Promise<UpdateResult<TTasksList>> {
    return await tasksRepository.tasksUpdate(collection, id, dataUpdate);
  },

  async taskDelete(
    collection: TCollectionTasks,
    id: string
  ): Promise<DeleteResult> {
    return await tasksRepository.taskDelete(collection, id);
  },
};
