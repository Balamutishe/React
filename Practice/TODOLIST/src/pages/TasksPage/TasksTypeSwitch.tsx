import { Button } from "@shared/components/Button/Button";
import { useState } from "react";
import c from "./TasksPage.module.css";

export const TasksTypeSwitcher = () => {
  const [stateTasks, setStateTasks] = useState("active");

  const handleSwitch = (type: "active" | "completed") => {
    setStateTasks(type);
  };

  return (
    <div className={c.tasksTypeSwitcher}>
      <Button
        text="Active task"
        variant={stateTasks === "active" ? "primary" : "secondary"}
        onClick={() => handleSwitch("active")}
      />
      <Button
        text="Completed"
        variant={stateTasks === "completed" ? "primary" : "secondary"}
        onClick={() => handleSwitch("completed")}
      />
    </div>
  );
};
