// src/pages/ExpensesList.jsx
import React from "react";
import ListComponent from "../components/ListComponent";

const ExpensesList = () => {
  const data = [
    { id: 1, description: "Rent", amount: 1000, date: "2024-01-05" },
    { id: 2, description: "Groceries", amount: 200, date: "2024-01-07" },
  ];

  const fields = [
    { key: "id", label: "ID" },
    { key: "description", label: "Description" },
    { key: "amount", label: "Amount" },
    { key: "date", label: "Date" },
  ];

  return <ListComponent data={data} fields={fields} title="Expenses" />;
};

export default ExpensesList;
