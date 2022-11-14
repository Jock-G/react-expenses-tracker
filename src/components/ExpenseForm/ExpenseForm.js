import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [creatingExpense, setCreatingExpense] = useState(false);

  const userInputHandler = (event, property) => {
    // setUserInput({
    //   ...userInput,
    //   [property]: event.target.value,
    // });
    // More secure approach
    setUserInput((prevState) => {
      return { ...prevState, [property]: event.target.value };
    });
  };

  const cancelClickHandler = () => {
    setCreatingExpense((prevState) => {
      return !prevState;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    setCreatingExpense(false);
  };

  const expenseFormContent = creatingExpense ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            value={userInput.enteredTitle}
            required
            onChange={(e) => userInputHandler(e, "enteredTitle")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="50.00"
            value={userInput.enteredAmount}
            required
            onChange={(e) => userInputHandler(e, "enteredAmount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            required
            onChange={(e) => userInputHandler(e, "enteredDate")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => cancelClickHandler()}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  ) : (
    <button type="button" onClick={() => cancelClickHandler()}>
      Add new expense
    </button>
  );
  return expenseFormContent;
}

export default ExpenseForm;
