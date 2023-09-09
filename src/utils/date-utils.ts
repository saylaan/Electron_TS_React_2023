export const getHourAlarm = (timestamp: Date): string => {
  const date = new Date(timestamp).toLocaleTimeString();
  const amPm = date.substring(date.length - 2, date.length);
  const hourMin = date.split(':');
  return `${hourMin[0]}:${hourMin[1]} ${amPm}`;
};
