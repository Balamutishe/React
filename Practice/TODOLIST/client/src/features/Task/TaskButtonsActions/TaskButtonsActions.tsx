import type { FC } from "react";
import { TaskChange } from "./components/TaskChange";
import { TaskDelete } from "./components/TaskDelete";
import { TaskCompleting } from "./components/TaskCompleting/TaskCompleting";

import c from "./TaskButtonsActions.module.css";

export const TaskButtonsActions: FC<{ visibility: boolean }> = ({
  visibility,
}) => {
  return (
    <div className={visibility ? `${c.buttons}` : `${c.buttonsInvisible}`}>
      <TaskChange />
      <TaskDelete />
      <TaskCompleting />
    </div>
  );
};
