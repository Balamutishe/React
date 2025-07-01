import { TTaskBody, TTasksList, TCollectionTasks } from "../types";
import { Collection, ObjectId } from "mongodb";

export const tasksGetAll = async (collection: Collection<TTasksList>) => {
  return await collection.find({}).toArray();
};

export const taskGetOne = async (collection: TCollectionTasks, id: string) => {
  return await collection.findOne({ _id: new ObjectId(id) });
};

export const taskCreate = async (
  collection: TCollectionTasks,
  taskData: TTaskBody
) => {
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
  return await collection.insertOne(newTask);
};

export const tasksFilterBySearchValue = async (
  collection: TCollectionTasks,
  searchData: string
) => {
  return await collection.find({ title: { $regex: searchData } }).toArray();
};

export const taskFindById = async (
  collection: Collection<TTasksList>,
  id: string
) => {
  return await collection.findOne({ _id: new ObjectId(id) });
};

export const tasksUpdate = async (
  collection: TCollectionTasks,
  id: string,
  dataUpdate: TTaskBody
) => {
  return await collection.updateOne({ _id: new ObjectId(id) }, dataUpdate);
};

export const taskDelete = async (collection: TCollectionTasks, id: string) => {
  return await collection.deleteOne({ _id: new ObjectId(id) });
};
