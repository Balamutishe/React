import { TTasksList, TTaskBody } from "../types";
import { randomUUID } from "crypto";

export const taskCreate = (db: TTasksList, taskData: TTaskBody) => {
  const newTask = {
    id: randomUUID(),
    title: taskData.title ? taskData.title : "New task",
    status: "not completed",
    description: taskData.description
      ? taskData.description
      : "Task description",
    priority: taskData.priority ? taskData.priority : "low",
    due_date: new Date().toDateString(),
  };

  db.push(newTask);

  return newTask;
};

export const tasksFilterBySearchValue = (
  db: TTasksList,
  searchValue: string
) => {
  return db.filter((c) => c.title.includes(searchValue));
};

export const taskFindById = (db: TTasksList, id: string) => {
  return db.find((c) => c.id === id);
};

export const tasksUpdate = (
  db: TTasksList,
  id: string,
  dataUpdate: TTaskBody
) => {
  return db.map((c) => {
    if (c.id === id && dataUpdate) {
      return {
        ...c,
        ...dataUpdate,
      };
    }

    return c;
  });
};

export const taskDelete = (db: TTasksList, id: string) => {
  return db.filter((c) => c.id !== id);
};
