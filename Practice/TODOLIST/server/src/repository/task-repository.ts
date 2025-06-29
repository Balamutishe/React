import { TTaskBody, TDbTasks, TTasksList, TTask } from "../types";
import { randomUUID } from "crypto";
import { Collection, OptionalId, Db } from "mongodb";

export const tasksGetAll = async (db: Db) => {
  return await db.collection("tasks").find().toArray();
};

export const taskCreate = async (db: Db, taskData: TTaskBody) => {
  const newTask = {
    title: taskData.title ? taskData.title : "New task",
    status: "not completed",
    description: taskData.description
      ? taskData.description
      : "Task description",
    priority: taskData.priority ? taskData.priority : "low",
    due_date: new Date().toDateString(),
  };

  return await db.collection("tasks").insertOne(newTask);
};

export const tasksFilterBySearchValue = async (
  db: Db,
  searchData: { title: string }
) => {
  return await db.collection("tasks").find(searchData).toArray();
};

export const taskFindById = async (db: Collection<TTasksList>, id: string) => {
  return await db.findOne({ id });
};

export const tasksUpdate = async (
  db: Collection<TTasksList>,
  id: string,
  dataUpdate: TTaskBody
) => {
  return await db.updateOne({ id }, dataUpdate);
};

export const taskDelete = async (db: Collection<TTasksList>, id: string) => {
  return await db.deleteOne({ id });
};
