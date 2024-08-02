// src/pages/Accounts.jsx

import React, { useEffect, useState } from "react";
import ListComponent from "../components/ListComponent";
import {
  fetchAccounts,
  updateAccount,
  deleteAccount,
  createAccount,
} from "../controllers/accountsController";
import Account from "../models/accountModel";

const Accounts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const accountsData = await fetchAccounts();
        const formattedData = accountsData.map((item) => ({
          ...item,
          balance: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item.balance),
          type: item.type,
        }));
        setData(formattedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleEdit = async (record) => {
    try {
      const updatedAccount = new Account(
        record.id,
        record.name,
        record.type,
        parseFloat(record.balance.replace(/[^0-9,-]+/g, "").replace(",", "."))
      );
      const result = await updateAccount(updatedAccount);
      const formattedResult = {
        ...result,
        balance: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(result.balance),
      };
      setData((prevData) =>
        prevData.map((item) =>
          item.id === formattedResult.id ? formattedResult : item
        )
      );
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  const handleDelete = async (record) => {
    try {
      await deleteAccount(record.id);
      setData((prevData) => prevData.filter((item) => item.id !== record.id));
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  const handleAdd = async (newRecord) => {
    try {
      const newAccount = new Account(
        null,
        newRecord.name,
        newRecord.type,
        parseFloat(
          newRecord.balance.replace(/[^0-9,-]+/g, "").replace(",", ".")
        )
      );
      const result = await createAccount(newAccount);
      const formattedResult = {
        ...result,
        balance: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(result.balance),
      };
      setData((prevData) => [...prevData, formattedResult]);
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };

  const fields = [
    { key: "id", label: "ID", type: "readonly" },
    { key: "name", label: "Name", type: "text" },
    {
      key: "type",
      label: "Type",
      type: "combobox",
      options: [
        { value: "Savings", label: "Savings" },
        { value: "Checking", label: "Checking" },
        { value: "Investment", label: "Investment" },
      ],
    },
    { key: "balance", label: "Balance", type: "text" },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ListComponent
      data={data}
      fields={fields}
      title="Accounts"
      onEdit={handleEdit}
      onDelete={handleDelete}
      onAdd={handleAdd}
    />
  );
};

export default Accounts;
