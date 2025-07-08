import { useState } from "react";
import MoreIcon from "@shared/icons/more.svg?react";
import { Button } from "@widgets/components";

import c from "./TaskMoreActions.module.css";

export const TaskMoreActions = () => {
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
      <div className={visible ? `${c.buttons}` : `${c.buttonsInvisible}`}>
        <Button text="Complete" variant="successful" />
        <Button text="Change" variant="secondary" />
        <Button text="Delete" variant="danger" />
      </div>
    </div>
  );
};
