import { TasksSwitchState } from "@features/Task/TasksSwitchState";
import { List } from "@widgets/components/List";

export const Content = () => {
  return (
    <div>
      <TasksSwitchState />
      <List />
    </div>
  );
};
