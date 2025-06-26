import { TasksList } from "./TasksList";
import { TasksTypeSwitcher } from "./TasksTypeSwitch";

export const TasksPageContent = () => {
  return (
    <div>
      <TasksTypeSwitcher />
      <TasksList />
    </div>
  );
};
