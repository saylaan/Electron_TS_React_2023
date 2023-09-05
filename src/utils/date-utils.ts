export const checkIntervalDate = (startingDate: string, endingDate: string) => {
  return new Date(startingDate).getTime() < new Date(endingDate).getTime();
};
