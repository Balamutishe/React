import { Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/users";
import { TasksPage } from "../pages/tasks";
import { UsersProvider } from "../entities/user";

export function App() {
  return (
    <UsersProvider>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/:userId/tasks" element={<TasksPage />} />
      </Routes>
    </UsersProvider>
  );
}
