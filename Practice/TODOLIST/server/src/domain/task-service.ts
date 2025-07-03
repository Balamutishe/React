import { TTaskBody, TCollectionTasks, TTasksList } from "../types";
import { DeleteResult, InsertOneResult, UpdateResult, WithId } from "mongodb";
import { tasksRepository } from "../repository";

export const tasksService = {
  async tasksFindAll(
    collection: TCollectionTasks,
    limitValue: number,
    skipValue: number
  ): Promise<WithId<TTasksList>[]> {
    return await tasksRepository.tasksFindAll(
      collection,
      limitValue,
      skipValue
    );
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

  async tasksCountGet(collection: TCollectionTasks, searchData?: string) {
    return await tasksRepository.tasksCountGet(collection, searchData);
  },

  async queryPagesDataTransform(
    collection: TCollectionTasks,
    pageSize: number,
    pageNumber: number,
    searchData?: string
  ) {
    let elementsCount = 0;

    searchData
      ? (elementsCount = await this.tasksCountGet(collection, searchData))
      : (elementsCount = await this.tasksCountGet(collection));

    const limitValue = pageSize;
    const pagesCountValue = Math.ceil(elementsCount / pageSize);
    const skipValue = (pageNumber - 1) * pageSize;

    return {
      pagesCountValue,
      limitValue,
      skipValue,
    };
  },
};
