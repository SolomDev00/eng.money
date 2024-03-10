import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";

const RootLayout = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#080707";
    document.body.style.color = darkMode ? "#fff" : "#000";
  };

  return (
    <div className={`${darkMode && "dark"} root-layout`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onClick={toggleDarkMode}
      />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
