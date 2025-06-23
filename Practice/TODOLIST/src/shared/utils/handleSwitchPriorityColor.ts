export const handlerSwitchPriorityColor = (
  priority: "high" | "medium" | "low",
  style: {
    priorityHigh: string;
    priorityMedium: string;
    priorityLow: string;
  }
) => {
  switch (priority) {
    case "high":
      return `${style.priorityHigh}`;
    case "medium":
      return `${style.priorityMedium}`;
    case "low":
      return `${style.priorityLow}`;
  }
};
