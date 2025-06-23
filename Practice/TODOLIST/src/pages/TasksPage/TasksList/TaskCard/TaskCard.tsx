import c from "./TaskCard.module.css";
import { TaskCardMore } from "./TaskCardMore";
import { handlerSwitchPriorityColor } from "@shared/utils/handleSwitchPriorityColor";

export const TaskCard = () => {
  return (
    <div
      className={`${c.taskCard} ${handlerSwitchPriorityColor("medium", {
        priorityHigh: c.priorityHigh,
        priorityMedium: c.priorityMedium,
        priorityLow: c.priorityLow,
      })}`}
    >
      <div className={c.taskCardHeader}>
        <h3>Task Title</h3>
        <TaskCardMore />
      </div>
      <div className={c.taskCardContent}>
        <p>Task description goes here.</p>
        <p>Due Date: 2023-10-31</p>
        <p>Status: In Progress</p>
        <p>Assigned to: John Doe</p>
        <p>Priority: High</p>
      </div>
    </div>
  );
};
