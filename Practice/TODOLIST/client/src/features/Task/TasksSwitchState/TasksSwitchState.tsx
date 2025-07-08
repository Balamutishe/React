import { Button } from "@widgets/components/Button/Button";
import { useState } from "react";
import c from "./TasksSwitchState.module.css";

export const TasksSwitchState = () => {
  const [state, setState] = useState("firstState");

  const handleSwitch = (type: "firstState" | "secondState") => {
    setState(type);
  };

  return (
    <div className={c.buttonsSwitcher}>
      <Button
        text="In progress"
        variant={state === "firstState" ? "primary" : "secondary"}
        onClick={() => handleSwitch("secondState")}
      />
      <Button
        text="Completed"
        variant={state === "secondState" ? "primary" : "secondary"}
        onClick={() => handleSwitch("firstState")}
      />
    </div>
  );
};
