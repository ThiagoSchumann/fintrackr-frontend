// src/components/Sidebar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMoneyBillWave,
  faCreditCard,
  faUniversity,
  faFileInvoice,
  faListAlt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

function Sidebar({ isOpen, isDarkMode }) {
  return (
    <div
      className={`sidebar ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out bg-dark-lighter text-gray-lightest border-r-2 border-dotted border-gray-dark`}
    >
      <div className="flex items-center justify-center p-2 logo-container">
        <img src={"/logo.svg"} alt="Logo" className="w-48 h-24" />
      </div>
      <SimpleBar style={{ maxHeight: "100%" }}>
        <ul className="space-y-1 mt-0">
          <SidebarCategory name="Transactions">
            <SidebarItem to="/" icon={faHome} label="Dashboard" />
            <SidebarItem to="/incomes" icon={faMoneyBillWave} label="Incomes" />
            <SidebarItem to="/expenses" icon={faChartLine} label="Expenses" />
            <SidebarItem
              to="/transactions"
              icon={faCreditCard}
              label="Transactions"
            />
          </SidebarCategory>
          <SidebarCategory name="Data Management">
            <SidebarItem
              to="/financial-institution"
              icon={faUniversity}
              label="Financial Institution"
            />
            <SidebarItem to="/accounts" icon={faCreditCard} label="Accounts" />
            <SidebarItem
              to="/credit-card"
              icon={faCreditCard}
              label="Credit Card"
            />
            <SidebarItem to="/invoices" icon={faFileInvoice} label="Invoices" />
            <SidebarItem to="/categories" icon={faListAlt} label="Categories" />
          </SidebarCategory>
        </ul>
      </SimpleBar>
    </div>
  );
}

function SidebarItem({ to, icon, label }) {
  return (
    <li className="hover:bg-dark">
      <Link to={to} className="flex items-center px-4 py-2 w-full">
        <FontAwesomeIcon icon={icon} className="mr-2" />
        <span className="ml-2">{label}</span>
      </Link>
    </li>
  );
}

function SidebarCategory({ name, children }) {
  return (
    <div>
      <h3 className="text-xs uppercase px-4 py-2 text-gray-500">{name}</h3>
      {children}
    </div>
  );
}

export default Sidebar;
