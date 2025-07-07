import { CardMoreActions } from "@features/Card/CardMoreActions/CardMoreActions";
import { handlerSwitchPriorityColor } from "@shared/utils/handleSwitchPriorityColor";
import c from "./Card.module.css";

export const Card = () => {
  return (
    <div
      className={`${c.card} ${handlerSwitchPriorityColor("low", {
        priorityHigh: c.priorityHigh,
        priorityMedium: c.priorityMedium,
        priorityLow: c.priorityLow,
      })}`}
    >
      <div className={c.cardHeader}>
        <h3>Task Title</h3>
        <CardMoreActions />
      </div>
      <div className={c.cardContent}>
        <p>Task description goes here.</p>
        <p>Due Date: 2023-10-31</p>
        <p>Status: In Progress</p>
        <p>Assigned to: John Doe</p>
        <p>Priority: High</p>
      </div>
    </div>
  );
};
