export const dateTimeUpdate = (date: string, variant: "account" | "task") => {
  const newDate = new Date(date);
  const yyyy = newDate.getFullYear();
  const dd = validElemDate(newDate.getDate());
  const mm = validElemDate(newDate.getMonth() + 1);
  const hours = validElemDate(newDate.getHours());
  const minutes = validElemDate(newDate.getMinutes());
  const seconds = validElemDate(newDate.getSeconds());
  const fullDate = `${dd}.${mm}.${yyyy}`;
  const fullTime = `${hours}:${minutes}:${seconds}`;

  function validElemDate(elemDate: number) {
    if (elemDate < 10) {
      return "0" + elemDate;
    }
    return elemDate;
  }

  switch (variant) {
    case "account":
      return `${fullDate}`;
    case "task":
      return `${fullDate} ${fullTime}`;
  }
};
