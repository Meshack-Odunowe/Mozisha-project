import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import About from "./components/About";
import Footer from "./components/Footer";
import { FaBars, FaTimes, FaSun } from "react-icons/fa";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  // Toggle the menu

  return (
    <div
      className={`relative  ${isDarkMode ? "dark:bg-black text-gray-200 " : ""}`}>
       <button
        onClick={toggleDarkMode}
        className={` absolute top-4 right-[20%] md:right-0  md:fixed rounded-md   md:top-9 md:z-20 ${
          isDarkMode ? "  rounded-full p-4 text-white " : "p-4"
        }`}>
        <FaSun />
        </button>
      <div className={`container mx-auto mb-8 px-8 ${isDarkMode ? "dark:bg-black text-gray-200 " : ""}`}>
     
       
        <Navbar /> 
        <Hero />
        <Mission/>
        {/* <About />
      <Footer /> */}
      </div>
    </div>
  );
};

export default App;
