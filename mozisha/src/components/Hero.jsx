import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Heroimg from "../assets/group-photo.webp";
const Hero = () => {
  return (
    <div>
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -100 }} // Initial position to the left
          animate={{ x: 0, opacity: 1 }} // Animate to the center
          transition={{ duration: 1 }}
          className=" text-5xl   leading-[4rem] text-center  font-extrabold mt-8">
          Unlocking African Talent for Global Success{" "}
        </motion.h1>
        <motion.p className="leading-[4rem] text-center  font-extrabold " initial={{ opacity: 0, x: -100, y:50 }} // Initial position to the left
          animate={{ x: 0,y:0, opacity: 1 }} // Animate to the center
          transition={{ duration: 1 }}>
        Mozisha - Your Strategic Growth Partner
        </motion.p>
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="rounded-md mt-8"
      >
        <img src={Heroimg} alt="" />
      </motion.div>
      </div>
    </div>
  );
};

export default Hero;
