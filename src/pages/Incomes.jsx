// src/pages/Incomes.jsx
import React from "react";
import ListComponent from "../components/ListComponent";

const Incomes = () => {
  const data = [
    { id: 1, description: "Salary", amount: 5000, date: "2024-01-01" },
    { id: 2, description: "Freelance", amount: 1200, date: "2024-01-10" },
  ];

  const fields = [
    { key: "id", label: "ID" },
    { key: "description", label: "Description" },
    { key: "amount", label: "Amount" },
    { key: "date", label: "Date" },
  ];

  return <ListComponent data={data} fields={fields} title="Incomes" />;
};

export default Incomes;
