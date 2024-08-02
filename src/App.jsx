import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Incomes from "./pages/Incomes";
import Expenses from "./pages/ExpensesList";
import Transactions from "./pages/Transactions";
import FinancialInstitutions from "./pages/FinancialInstitutions";
import Accounts from "./pages/Accounts";
import CreditCards from "./pages/CreditCards";
import Invoices from "./pages/Invoices";
import Categories from "./pages/Categories";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "./hooks/useDarkMode";
import "./App.css"; // Importando CSS corretamente

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);

  return (
    <Router>
      <div className={`flex ${isDarkMode ? "dark" : "light"}`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "w-[calc(100%-16rem)]" : "w-full"
          }`}
        >
          <header
            className={`flex justify-between items-center p-4 ${
              isDarkMode
                ? "bg-dark text-gray-lightest"
                : "bg-gray text-gray-dark"
            }`}
          >
            <div className="flex items-center"></div>
            <div className="flex items-center">
              {/* <DarkModeSwitch
                style={{ marginRight: "1rem" }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={30}
              /> */}
              <span className="text-xl mx-2">|</span>
              <img
                src="/user-photo.png"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </header>
          <div className="content p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/incomes" element={<Incomes />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route
                path="/financial-institutions"
                element={<FinancialInstitutions />}
              />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/credit-cards" element={<CreditCards />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
