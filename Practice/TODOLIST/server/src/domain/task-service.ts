import { TTaskBody, TCollectionTasks, TTasksList, TTask } from "../types";
import { DeleteResult, InsertOneResult, UpdateResult, WithId } from "mongodb";
import { tasksRepository } from "../repository";

export const tasksService = {
  async tasksFindAll(
    limitValue: number,
    skipValue: number
  ): Promise<WithId<TTask>[]> {
    return await tasksRepository.tasksFindAll(limitValue, skipValue);
  },

  async taskFindById(id: string): Promise<WithId<TTask> | null> {
    return await tasksRepository.taskFindById(id);
  },

  async taskFindByFilter(
    searchData: string,
    skipValue: number,
    limitValue: number
  ): Promise<WithId<TTask>[]> {
    return await tasksRepository.taskFindByFilter(
      searchData,
      skipValue,
      limitValue
    );
  },

  async taskCreate(taskData: TTaskBody): Promise<InsertOneResult<TTask>> {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskData.title ? taskData.title : "New task",
      status: "not completed",
      description: taskData.description
        ? taskData.description
        : "Task description",
      priority: taskData.priority ? taskData.priority : "low",
      due_date: new Date().toDateString(),
    };

    return await tasksRepository.taskCreate(newTask);
  },

  async taskUpdate(
    id: string,
    dataUpdate: TTaskBody
  ): Promise<UpdateResult<TTask>> {
    return await tasksRepository.tasksUpdate(id, dataUpdate);
  },

  async taskDelete(id: string): Promise<DeleteResult> {
    return await tasksRepository.taskDelete(id);
  },

  async tasksCountGet(searchData?: string) {
    return await tasksRepository.tasksCountGet(searchData);
  },

  async queryPagesDataTransform(
    pageSize?: number,
    pageNumber?: number,
    searchData?: string
  ): Promise<{
    pagesCountValue: number;
    limitValue: number;
    skipValue: number;
  }> {
    let elementsCount = 0;
    const pageNumberVariant = pageNumber || 1;
    const pageSizeVariant = pageSize || 5;

    searchData
      ? (elementsCount = await this.tasksCountGet(searchData))
      : (elementsCount = await this.tasksCountGet());

    const limitValue = pageSizeVariant;
    const pagesCountValue = Math.ceil(elementsCount / pageSizeVariant);
    const skipValue = (pageNumberVariant - 1) * pageSizeVariant;

    return {
      pagesCountValue,
      limitValue,
      skipValue,
    };
  },
};
