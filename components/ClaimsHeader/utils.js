import moment from 'moment';

export const isToday = (date) => (date.isSame(new Date(), 'days'));

export const isNoOfMonths = (startDate, endDate, months) => (endDate.diff(startDate, 'months') === months);

export const isNoOfYears = (startDate, endDate, years) => (endDate.diff(startDate, 'years') === years);

export const isLast30 = (startDate, endDate) => (isToday(endDate) && isNoOfMonths(startDate, endDate, 1));

export const isLast90 = (startDate, endDate) => (isToday(endDate) && isNoOfMonths(startDate, endDate, 3));

export const isLastYear = (startDate, endDate) => {
  const diffDate = moment(endDate);
  diffDate.subtract(1, 'years');
  return (isToday(endDate) && diffDate.isSame(startDate, 'day'));
};


export const isCustomRange = (startDate, endDate) => (!(isLast30(startDate, endDate) || isLast90(startDate, endDate) || isLastYear(startDate, endDate)));
