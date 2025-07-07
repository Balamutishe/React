import { useState } from "react";
import { Button } from "@widgets/components/Button/Button";
import MoreIcon from "@shared/icons/more.svg?react";
import { TaskButtonsActions } from "@features/Task/TaskButtonsActions/TaskButtonsActions";

export const CardMoreActions = () => {
  const [visible, setVisibility] = useState(false);

  const handlerActionsVisibility = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <div onBlur={() => setVisibility(false)}>
      <div>
        <Button
          variant="icon"
          children={<MoreIcon />}
          onClick={handlerActionsVisibility}
        />
      </div>
      <TaskButtonsActions visibility={visible} />
    </div>
  );
};
