// src/components/Sidebar.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faSackDollar,
  faMoneyBillWave,
  faCashRegister,
  faBuildingColumns,
  faWallet,
  faCreditCard,
  faFileInvoice,
  faIcons,
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { useDarkMode } from "../hooks/useDarkMode";

function Sidebar({ isOpen, toggleSidebar }) {
  const [isDarkMode] = useDarkMode();

  return (
    <div className="flex">
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-300 ease-in-out flex flex-col ${
          isOpen ? "w-64" : "w-16"
        } ${
          isDarkMode
            ? "bg-dark-lighter text-gray-lightest"
            : "bg-gray-lightest text-gray-dark"
        }`}
      >
        <div className="relative flex items-center justify-between p-4">
          <img
            src={isOpen ? "/logo.svg" : "/logo-mini.svg"}
            alt="Logo"
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? "w-48 h-24 mb-4 mr-8" : "w-12 h-12 mb-0 mr-4"
            }`}
          />
          <div
            className={`absolute right-0 transform transition-transform ${
              isOpen ? "opacity-0 hover:opacity-100" : "opacity-100"
            } ${isOpen ? "-mr-6" : "-mr-5"} flex items-center justify-center`}
          >
            <button
              onClick={toggleSidebar}
              className={`focus:outline-none rounded-full w-10 h-10 flex items-center justify-center ${
                isDarkMode
                  ? "bg-dark-lighter text-gray-lightest"
                  : "bg-gray-lightest text-gray-dark"
              }`}
            >
              <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mb-4 px-4">
          <button
            className={`flex items-center justify-center space-x-2 text-white bg-primary hover:bg-accent font-bold rounded-full transition-all duration-300 ${
              isOpen ? "w-4/5 h-12 px-4 py-3" : "w-12 h-12"
            }`}
            onClick={() => alert("New button clicked!")}
          >
            <FontAwesomeIcon
              icon={faPlus}
              className={`transition-transform duration-300 ${
                isOpen ? "left-10" : ""
              }`}
            />
            {isOpen && <span className="w-full text-center">New</span>}
          </button>
        </div>
        <SimpleBar style={{ maxHeight: "100%" }}>
          <ul className="space-y-1 mt-0">
            <SidebarItem
              to="/"
              icon={faChartLine}
              label="Dashboard"
              isOpen={isOpen}
            />
            <SidebarItem
              to="/accounts"
              icon={faWallet}
              label="Accounts"
              isOpen={isOpen}
            />
            <SidebarItem
              to="/transactions"
              icon={faCashRegister}
              label="Transactions"
              isOpen={isOpen}
            />
            <SidebarItem
              to="/credit-cards"
              icon={faCreditCard}
              label="Credit Cards"
              isOpen={isOpen}
            />
            <SidebarItem
              to="/categories"
              icon={faIcons}
              label="Categories"
              isOpen={isOpen}
            />
            <SidebarItem
              to="/incomes"
              icon={faSackDollar}
              label="Incomes"
              isOpen={isOpen}
            />
            <SidebarItem
              to="/expenses"
              icon={faMoneyBillWave}
              label="Expenses"
              isOpen={isOpen}
            />
            <SidebarItem
              to="/financial-institutions"
              icon={faBuildingColumns}
              label="Financial Institutions"
              isOpen={isOpen}
            />
            <SidebarItem
              to="/invoices"
              icon={faFileInvoice}
              label="Invoices"
              isOpen={isOpen}
            />
          </ul>
        </SimpleBar>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      ></div>
    </div>
  );
}

function SidebarItem({ to, icon, label, isOpen }) {
  return (
    <li className="hover:bg-opacity-75 transition-colors duration-200">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 py-2 w-full border-l-4 border-primary text-primary"
            : "flex items-center px-4 py-2 w-full border-l-4 border-transparent hover:bg-dark-lightest"
        }
      >
        <div className="icon-container mr-3">
          <FontAwesomeIcon icon={icon} size="lg" />
        </div>
        {isOpen && <span className="text-base">{label}</span>}
      </NavLink>
    </li>
  );
}

export default Sidebar;
