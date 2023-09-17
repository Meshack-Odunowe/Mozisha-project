import React, { useState } from "react";
import Img from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Heroimg from '../assets/group-photo.webp'
const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setOpenBar(!openBar);
  };

  return (
    < >
      <div className="flex flex-col mt-8 md:hidden   " >
        <div className="flex justify-between items-center " >
          <img src={Img} alt="logo img" className="w-20" />
          <div>
    {openBar ? (
      <FaTimes className="w-16 h-8 transform scale-100 opacity-100 transition-transform duration-300 hover:scale-110 hover:opacity-80" onClick={toggleMenu} />
    ) : (
      <FaBars className="w-16 h-8 transform scale-100 opacity-100 transition-transform duration-300 hover:scale-110 hover:opacity-80" onClick={toggleMenu} />
    )}
  </div>
        </div>
        <div >
          <div className="relative">

          <ul
            className={`${
              openBar ? "block" : "hidden"
            } mt-8   flex flex-col text-center font-bold bg-white absolute w-full z-10 text-2xl`}>
            <li className="hover:bg-violet-400 rounded-md py-4">
              <a href="#about">About Us</a>
            </li>
            <li className="hover:bg-violet-400 py-4">
              <a href="#services">Our Services</a>
            </li>
            <button className="bg-violet-700 text-white  py-4 rounded-md w-full mt-8">
              Contact Us
            </button>
          </ul>
          </div>
        </div>
      </div>

      {/* ==============desktop version================ */}
      <div className="hidden md:block">
        <div className="flex  justify-between items-center mt-4">
          <div>
            <img src={Img} alt="logo" className="w-20" />
          </div>
          <div>
            <ul className="flex gap-8">
              <li className="px-4 py-2">
                <a href="">About us</a>
              </li>
              <li className="px-4 py-2">
                <a href="">Our Services</a>
              </li>
              <button className="bg-violet-700 text-white   rounded-md  px-4 py-2">
                Contact Us
              </button>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
