import { Input } from "@shared/components/Input/Input";
import c from "./TasksPage.module.css";
import { useState } from "react";
import { Button } from "@shared/components/Button/Button";
import { handleSwitchIcon } from "@shared/utils/handleSwitchIcon";

export const TasksPageHeader = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={c.tasksPageHeader}>
      <Input
        value={searchValue}
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchValue(e.target.value)}
        children={handleSwitchIcon("Search")}
      />
      <Button
        text="Add new tasks list"
        variant="primary"
        children={handleSwitchIcon("Add")}
      />
    </div>
  );
};
