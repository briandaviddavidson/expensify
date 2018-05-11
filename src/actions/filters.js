// set text filter
export const SET_TEXT_FILTER = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// sort by date
export const SORT_BY_DATE = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
});

// sort by amount
export const SORT_BY_AMOUNT = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
});

// set start date
export const SET_START_DATE = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// set end date
export const SET_END_DATE = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
