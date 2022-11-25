import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState(new Date().getFullYear());
  const changeYearHandler = (year) => {
    setEnteredYear(year);
  };
  const filteredArray = props.items.filter((expense) => {
    return expense.date.getFullYear() == enteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={changeYearHandler}
        enteredYear={enteredYear}
      />
      <ExpenseList items={filteredArray} />
    </Card>
  );
};

export default Expenses;
