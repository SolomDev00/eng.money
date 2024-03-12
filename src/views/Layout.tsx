import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import HomeLoading from "../components/loading/home";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.color = darkMode ? "#fff" : "#000";
    document.body.style.backgroundColor = darkMode ? "#fff" : "#080707";
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
          <div className="container z-30">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default RootLayout;
