import c from "./Card.module.css";
import { CardMore } from "./CardMore";
import { handlerSwitchPriorityColor } from "@shared/utils/handleSwitchPriorityColor";

export const Card = () => {
  return (
    <div
      className={`${c.taskCard} ${handlerSwitchPriorityColor("low", {
        priorityHigh: c.priorityHigh,
        priorityMedium: c.priorityMedium,
        priorityLow: c.priorityLow,
      })}`}
    >
      <div className={c.taskCardHeader}>
        <h3>Task Title</h3>
        <CardMore />
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
