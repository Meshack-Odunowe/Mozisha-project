/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Img from "../assets/whatsapp.jpeg";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  // Toggle the menu
  const toggleMenu = () => {
    setOpenBar(!openBar);
  };
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  };
  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Define the CSS class based on the isNavbarFixed state
  const navbarClass = isNavbarFixed
  ? "fixed top-0 left-0 right-0 shadow-lg " +
    (isDarkMode ? "bg-black text-white" : "bg-white text-black")
  : "sticky top-0 ";
  return (
    <>
      <div className={`flex justify-between items-center ${navbarClass}`}>
        <div className="flex justify-between items-center ">
          <img src={Img} alt="logo-img" className="w-20 rounded-full md:hidden" />

          <div>
            {openBar ? (
              <FaTimes
                className={`w-16 h-8 fixed right-0 z-50  top-6 transform scale-100 opacity-100  font-light transition-transform duration-300 hover:scale-110 hover:opacity-80  md:hidden` }
                onClick={toggleMenu}
              />
            ) : (
              <FaBars
                className="w-16 h-8  fixed right-0 top-6 transform scale-100 opacity-100 transition-transform duration-300 hover:scale-110 hover:opacity-80 md:hidden"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        <div>
          <div>
            <ul
              className={`${
                openBar ? "block " : "hidden"
              }  flex  flex-col text-center  absolute h-screen   transition-opacity  rounded-md justify-center items-center top-0  left-0 w-full  text-2xl   ${
                isDarkMode ? "bg-black text-white" : "z-10 bg-white text-black"
              }`}>
              <li className="hover:bg-violet-400 rounded-md py-6  w-full">
                <Link
                  onClick={toggleMenu}
                  to="hero"
                  smooth={true}
                  duration={2000}>
                  Home
                </Link>
              </li>
              <li className="hover:bg-violet-400 rounded-md py-6 w-full">
                <li>
                  <Link
                    onClick={toggleMenu}
                    to="about"
                    smooth={true}
                    duration={2000}>
                    About
                  </Link>
                </li>
              </li>
              <li className="hover:bg-violet-400  py-6  w-full">
                <li>
                  <Link
                    onClick={toggleMenu}
                    to="services"
                    smooth={true}
                    duration={2000}>
                    Services
                  </Link>
                </li>{" "}
              </li>
              <button
                className={`bg-violet-700 text-white py-4 mt-6 rounded-md w-full   ${
                  isDarkMode ? "hover:bg-violet-400" : ""
                }`}>
                Contact Us
              </button>
            </ul>
          </div>
        </div>
      </div>

      {/* ==============desktop version================ */}
      <div className={`hidden md:block     ${isDarkMode ? "bg-white" : " "}`}>
        <div className="flex  justify-between items-center px-8 py-4">
          <div>
            <img src={Img} alt="logo" className="w-20 rounded-full" />
          </div>
          <div>
            <ul className="flex gap-8 items-center">
              <li className="px-4 py-2">
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>

              <li className="px-4 py-2">
              <Link
                    to="services"
                    smooth={true}
                    duration={1000}>
                    Services
                  </Link>
              </li>
              <button className="bg-violet-700 text-white   rounded-md  px-4 py-2">
                <Link to="contact" smooth={true} duration={500}>
                  Contact Us
                </Link>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
