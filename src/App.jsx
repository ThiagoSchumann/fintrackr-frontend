// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "./hooks/useDarkMode";
import "./index.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`App ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <header
          className={`flex justify-between items-center p-4 ${
            isDarkMode
              ? "bg-dark text-gray-light"
              : "bg-gray-100 text-gray-dark"
          }`}
        >
          <div className="flex items-center">
            <button className="menu-btn" onClick={toggleSidebar}>
              &#9776;
            </button>
            <span className="ml-4 text-xl font-bold"></span>
          </div>
          <div className="flex items-center">
            <DarkModeSwitch
              style={{ marginRight: "1rem" }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={30}
            />
            <span className="text-xl mx-2">|</span>
            <img
              src="/user-photo.png"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>
        <Sidebar isOpen={isSidebarOpen} />
        <div className="content p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
