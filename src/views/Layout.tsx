import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
// import Footer from "../components/Footer";

const RootLayout = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"} root-layout`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onClick={toggleDarkMode}
      />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
