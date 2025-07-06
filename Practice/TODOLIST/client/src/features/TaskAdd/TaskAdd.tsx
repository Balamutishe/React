import { handlerSwitchIcon } from "@shared/utils/handlerSwitchIcon";
import { Button } from "@widgets/components/Button/Button";

export const TaskAdd = () => {
  return (
    <Button
      text="Add new task"
      variant="primary"
      children={handlerSwitchIcon("Add")}
    />
  );
};
