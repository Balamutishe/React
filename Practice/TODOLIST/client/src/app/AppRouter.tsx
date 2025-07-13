import { Route, Routes } from "react-router-dom";
import { CalendarPage } from "@pages/CalendarPage";
import { TasksPage } from "@pages/TasksPage";
import { DashboardPage } from "@pages/DashboardPage";
import { AccountPage } from "@pages/AccountPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/account" element={<AccountPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/tasks/:id?" element={<TasksPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="*" element={<div>NotFound</div>} />
    </Routes>
  );
};
