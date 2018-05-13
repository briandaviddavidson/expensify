import React from 'react';

const ExpenseListItem = ({desc, amount, createdAt}) => (
  <div>
    <h3>{desc}</h3>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
