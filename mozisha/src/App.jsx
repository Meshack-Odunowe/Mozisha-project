import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import {  FaSun } from "react-icons/fa";
import Services from "./components/Services";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  // Toggle the menu

  return (
    <div name='app'
      className={`relative  ${isDarkMode ? "dark:bg-black text-gray-200 " : ""}`}>
        <Navbar /> 
      
       <button
        onClick={toggleDarkMode}
        className={` fixed top-4 right-[10%] md:right-0 z-50  md:fixed rounded-md   md:top-9 md:z-20 ${
          isDarkMode ? "  rounded-full p-4  " : "p-4"
        }`}>
        <FaSun />
        </button>
      <div className={`container mx-auto mb-8 px-8 ${isDarkMode ? "dark:bg-black text-gray-200 " : ""}`}>
     
        <Hero />
        <About />
        <Services/>
      <Footer /> 
      </div>
    </div>
  );
};

export default App;
