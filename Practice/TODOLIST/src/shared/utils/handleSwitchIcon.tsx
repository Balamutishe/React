import DashBoardIcon from "@shared/icons/dashboard.svg?react";
import TasksIcon from "@shared/icons/tasks.svg?react";
import GoalsIcon from "@shared/icons/goals.svg?react";
import TimeIcon from "@shared/icons/time.svg?react";
import CalendarIcon from "@shared/icons/calendar.svg?react";
import SettingsIcon from "@shared/icons/settings.svg?react";
import LogoutIcon from "@shared/icons/logout.svg?react";

export const handleSwitchIcon = (text: string) => {
  switch (text) {
    case "DashBoard":
      return <DashBoardIcon />;
    case "Tasks":
      return <TasksIcon />;
    case "Goals":
      return <GoalsIcon />;
    case "Time":
      return <TimeIcon />;
    case "Calendar":
      return <CalendarIcon />;
    case "Settings":
      return <SettingsIcon />;
    case "Logout":
      return <LogoutIcon />;
    default:
      break;
  }
};
