import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import { mockExpenses } from "./mock-data/mock-expenses.js";

const App = () => {
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const [expenses, setExpenses] = useState([...mockExpenses]);

  const addExpenseHandler = (newExpense) => {
    // setExpenses([newExpense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
