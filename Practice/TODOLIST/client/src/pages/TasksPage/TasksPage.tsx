import { Header } from "./components/Header";
import { Content } from "./components/Content";
import c from "./TasksPage.module.css";

export const TasksPage = () => {
  return (
    <div className={c.tasksPage}>
      <Header />
      <Content />
    </div>
  );
};
