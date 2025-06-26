import DashboardIcon from "@shared/icons/dashboard.svg?react";
import TasksIcon from "@shared/icons/tasks.svg?react";
import GoalsIcon from "@shared/icons/goals.svg?react";
import TimeIcon from "@shared/icons/time.svg?react";
import CalendarIcon from "@shared/icons/calendar.svg?react";
import SettingsIcon from "@shared/icons/settings.svg?react";
import LogoutIcon from "@shared/icons/logout.svg?react";
import ArrowDownIcon from "@shared/icons/arrow_down.svg?react";
import ArrowUpIcon from "@shared/icons/arrow_up.svg?react";
import AddIcon from "@shared/icons/add.svg?react";
import SearchIcon from "@shared/icons/search.svg?react";

export const handlerSwitchIcon = (text: string, className?: string) => {
  switch (text) {
    case "Dashboard":
      return <DashboardIcon className={className} />;
    case "Tasks":
      return <TasksIcon className={className} />;
    case "Goals":
      return <GoalsIcon className={className} />;
    case "Time":
      return <TimeIcon className={className} />;
    case "Calendar":
      return <CalendarIcon className={className} />;
    case "Settings":
      return <SettingsIcon className={className} />;
    case "Logout":
      return <LogoutIcon className={className} />;
    case "ArrowDown":
      return <ArrowDownIcon className={className} />;
    case "ArrowUp":
      return <ArrowUpIcon className={className} />;
    case "Add":
      return <AddIcon className={className} />;
    case "Search":
      return <SearchIcon className={className} />;
    default:
      break;
  }
};
