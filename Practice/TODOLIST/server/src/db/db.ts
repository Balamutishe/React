import { TTasksList } from "../types";

export const db: { tasks: TTasksList } = {
  tasks: [
    {
      id: "1",
      title: "Task1",
      status: "success",
      description: "Task description",
      priority: "high",
      due_date: new Date().toDateString(),
    },
    {
      id: "2",
      title: "Task2",
      status: "success",
      description: "Task description",
      priority: "low",
      due_date: new Date().toDateString(),
    },
    {
      id: "3",
      title: "Task3",
      status: "not completed",
      description: "Task description",
      priority: "low",
      due_date: new Date().toDateString(),
    },
    {
      id: "4",
      title: "Task4",
      status: "not completed",
      description: "Task description",
      priority: "medium",
      due_date: new Date().toDateString(),
    },
  ],
};
