import { Route, Routes } from "react-router-dom";
import { MainPage } from "@pages/MainPage";
import { CalendarPage } from "@pages/CalendarPage";
import { TasksPage } from "@pages/TasksPage";
import { DashboardPage } from "@pages/DashboardPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/tasks/:id?" element={<TasksPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="*" element={<div>NotFound</div>} />
    </Routes>
  );
};
