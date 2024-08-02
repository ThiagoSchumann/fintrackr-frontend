// src/components/ListComponent.jsx

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faGear,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const ListComponent = ({ data, fields, title, onEdit, onDelete, onAdd }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState({});

  const handleEditClick = (record) => {
    setCurrentRecord(record);
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
    setAddModalOpen(false);
    setCurrentRecord({});
  };

  const handleSaveChanges = () => {
    onEdit(currentRecord);
    handleCloseModal();
  };

  const handleSaveNewRecord = () => {
    onAdd(currentRecord);
    handleCloseModal();
  };

  const handleDelete = (record) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      onDelete(record);
    }
  };

  const handleChange = (key, value) => {
    setCurrentRecord((prev) => ({ ...prev, [key]: value }));
  };

  const renderField = (field) => {
    const value = currentRecord[field.key] ?? "";
    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(field.key, e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark dark:text-gray-lightest leading-tight focus:outline-none focus:shadow-outline"
          />
        );
      case "date":
        return (
          <input
            type="date"
            value={value}
            onChange={(e) => handleChange(field.key, e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark dark:text-gray-lightest leading-tight focus:outline-none focus:shadow-outline"
          />
        );
      case "combobox":
        return (
          <select
            value={value}
            onChange={(e) => handleChange(field.key, e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark dark:text-gray-lightest leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select an option</option>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "readonly":
        return (
          <input
            type="text"
            value={value}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark dark:text-gray-lightest leading-tight focus:outline-none focus:shadow-outline bg-gray-200 dark:bg-gray-700"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-dark dark:text-gray-lightest">
          {title}
        </h2>
        <button
          className="text-success hover:text-success-dark flex items-center space-x-1"
          onClick={() => {
            setCurrentRecord({}); // Ensure the current record is reset
            setAddModalOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>Add New</span>
        </button>
      </div>
      <div className="overflow-auto shadow-md rounded-lg">
        <table className="min-w-full bg-gray-lightest dark:bg-dark-lightest">
          <thead>
            <tr className="bg-gray-light dark:bg-dark-lightest">
              {fields.map((field) => (
                <th
                  key={field.key}
                  className="py-3 px-5 text-left text-gray-dark dark:text-gray-light uppercase tracking-wider"
                >
                  {field.label}
                </th>
              ))}
              <th className="py-3 px-5 text-left text-gray-dark dark:text-gray-light uppercase tracking-wider">
                <FontAwesomeIcon icon={faGear} />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-light dark:border-dark-lighter ${
                  index % 2 === 0
                    ? "bg-gray-lightest dark:bg-dark-lighter"
                    : "bg-gray-lightest dark:bg-dark-pale"
                }`}
                onClick={() => handleEditClick(item)}
              >
                {fields.map((field) => (
                  <td
                    key={field.key}
                    className="py-3 px-5 text-gray-dark dark:text-gray-lightest"
                  >
                    {item[field.key]}
                  </td>
                ))}
                <td className="py-3 px-5 text-gray-dark dark:text-gray-lightest flex space-x-2">
                  <button
                    className="text-primary hover:text-accent flex items-center space-x-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(item);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="text-error hover:text-error-dark flex items-center space-x-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(item);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(isEditModalOpen || isAddModalOpen) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-lighter bg-opacity-50">
          <div className="bg-gray-lightest dark:bg-dark-lightest p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-dark dark:text-gray-lightest">
              {isEditModalOpen ? "Edit Record" : "Add New Record"}
            </h2>
            {fields.map((field) => (
              <div key={field.key} className="mb-4">
                <label className="block text-gray-dark dark:text-gray-light text-sm font-bold mb-2">
                  {field.label}
                </label>
                {renderField(field)}
              </div>
            ))}
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded"
                onClick={
                  isEditModalOpen ? handleSaveChanges : handleSaveNewRecord
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListComponent;
