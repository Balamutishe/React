import { TTaskBody, TCollectionTasks, TTasksList, TTask } from "../types";
import { DeleteResult, InsertOneResult, ObjectId, UpdateResult } from "mongodb";

export const tasksFind = async (
  collection: TCollectionTasks,
  id?: string | null,
  searchData?: string
) => {
  if (id) return await collection.findOne({ _id: new ObjectId(id) });

  if (searchData)
    return await collection.find({ title: { $regex: searchData } }).toArray();

  return await collection.find({}).toArray();
};

export const taskCreate = async (
  collection: TCollectionTasks,
  taskData: TTaskBody
): Promise<InsertOneResult<TTasksList>> => {
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

export const tasksUpdate = async (
  collection: TCollectionTasks,
  id: string,
  dataUpdate: TTaskBody
): Promise<UpdateResult<TTasksList>> => {
  return await collection.updateOne(
    { _id: new ObjectId(id) },
    //@ts-ignore
    { $set: dataUpdate }
  );
};

export const taskDelete = async (
  collection: TCollectionTasks,
  id: string
): Promise<DeleteResult> => {
  return await collection.deleteOne({ _id: new ObjectId(id) });
};
