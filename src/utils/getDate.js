const getDate = (ts) => {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const date = new Date(ts * 1000);
  return `${date.toLocaleDateString("ru-RU", dateOptions)} ${date.toLocaleTimeString([], timeOptions)}`;
};

export default getDate;
