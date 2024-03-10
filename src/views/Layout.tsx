import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import HomeLoading from "../components/loading/home";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#080707";
    document.body.style.color = darkMode ? "#fff" : "#000";
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`${darkMode && "dark"} root-layout`}>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <HomeLoading />
        </div>
      ) : (
        <>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            onClick={toggleDarkMode}
          />
          <div className="container">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default RootLayout;
