import { Button } from "@widgets/components/Button/Button";
import { useState } from "react";
import c from "./ButtonsSwitch.module.css";

export const ButtonsSwitch = () => {
  const [stateTasks, setStateTasks] = useState("active");

  const handleSwitch = (type: "active" | "completed") => {
    setStateTasks(type);
  };

  return (
    <div className={c.buttonsSwitcher}>
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
