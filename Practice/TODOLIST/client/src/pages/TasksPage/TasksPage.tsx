import { TasksPageHeader } from "./TasksPageHeader";
import { TasksPageContent } from "./TasksPageContent";
import c from "./TasksPage.module.css";

export const TasksPage = () => {
  return (
    <div className={c.tasksPage}>
      <TasksPageHeader />
      <TasksPageContent />
    </div>
  );
};
