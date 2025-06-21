import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<div>MainPage</div>} />
      <Route path="/tasks" element={<div>TasksPage</div>} />
      <Route path="/goals" element={<div>GoalsPage</div>} />
      <Route path="/time" element={<div>TimePage</div>} />
      <Route path="/calendar" element={<div>CalendarPage</div>} />
      <Route path="*" element={<div>NotFound</div>} />
    </Routes>
  );
};
