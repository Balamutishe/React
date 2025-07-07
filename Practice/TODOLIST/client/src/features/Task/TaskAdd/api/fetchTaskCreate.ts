export const fetchTaskCreate = (
  taskData: Omit<TTask, "id">
): Promise<TTask> => {
  return fetchConfig("/api/tasks", "POST", taskData).then((data) =>
    TaskSchema.parse(data)
  );
};
