// get visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    // must be past the start date
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    // must be before the end date
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    // Checks to see if the description includes any text in the description
    const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      // recent expenses at the top
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      // most expensive at the top
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
