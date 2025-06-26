import { Button } from "@shared/components/Button/Button";
import { useState } from "react";
import MoreIcon from "@shared/icons/more.svg?react";
import c from "./TaskCard.module.css";

export const TaskCardMore = () => {
  const [visibleActions, setActionsVisibility] = useState(false);

  const handlerActionsVisibility = () => {
    setActionsVisibility((prev) => !prev);
  };

  return (
    <div onBlur={() => setActionsVisibility(false)}>
      <div className={c.taskButtonMoreContainer}>
        <Button
          variant="icon"
          children={<MoreIcon />}
          onClick={handlerActionsVisibility}
        />
      </div>
      <ul
        className={
          visibleActions
            ? `${c.taskCardActionsList}`
            : `${c.taskCardActionsListInvisible}`
        }
      >
        <li>
          <Button variant="secondary" text="Edit" />
        </li>
        <li>
          <Button variant="danger" text="Delete" />
        </li>
        <li>
          <Button variant="primary" text="Complete" />
        </li>
      </ul>
    </div>
  );
};
