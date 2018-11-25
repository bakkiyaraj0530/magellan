export const formatDate = (unformattedDate) => {
  let tmpDay = unformattedDate.getDate();
  let tmpMonth = unformattedDate.getMonth();
  const tmpYear = unformattedDate.getFullYear();

  if (tmpDay < 10) {
    tmpDay = `0${tmpDay}`;
  }

  if (tmpMonth < 10) {
    tmpMonth = `0${tmpMonth}`;
  }

  return `${tmpMonth}/${tmpDay}/${tmpYear}`;
};
