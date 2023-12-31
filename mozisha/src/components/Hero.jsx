/* eslint-disable react/no-unescaped-entities */
import  { useEffect, useState } from 'react';import CountUp from "react-countup";
import { motion } from "framer-motion";
import axios from 'axios'
import { TypeAnimation } from "react-type-animation";
import Heroimg from "../assets/group-photo.webp";
const Hero = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch a random quote from the API using Axios
    axios.get('https://type.fit/api/quotes')
      .then((response) => {
        // Get a random quote from the response data
        const randomIndex = Math.floor(Math.random() * response.data.length);
        const randomQuote = response.data[randomIndex].text;

        // Set the random quote in the state
        setQuote(randomQuote);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once on component mount
  return (
    <div name='hero' className={`"flex flex-col md:flex-row md:grid md:grid-cols-2 md:gap-16 md:mt-1 md:items-center`}>
      <div className=" mt-2 ">
      <p className=' italic text-[9px] text-violet-400  mt-10 text-center md:text-left'>{quote}</p>
        <motion.h1
          initial={{ opacity: 0, x: -100 }} // Initial position to the left
          animate={{ x: 0, opacity: 1 }} // Animate to the center
          transition={{ duration: 1 }}
          className=" text-5xl md:text-6xl  md:leading-[4.5rem] md:font-bold  text-violet-500 leading-[4rem] text-center  md:text-start font-extrabold mt-2  font-Lora">
          Enabling African Talent to Achieve 
          <TypeAnimation
            sequence={[` Global Success`, 2000,]}
            
            className=" text-4xl"
          />
        </motion.h1>

        <motion.p
          className="leading-[4rem] text-center   text-violet-400 md:text-start font-bold md:text-xl mt-16"
          initial={{ opacity: 0, x: -100, y: 50 }} // Initial position to the left
          animate={{ x: 0, y: 0, opacity: 1 }} // Animate to the center
          transition={{ duration: 1 }}>
          <TypeAnimation
            sequence={["Mozisha-Your Strategic Growth Partner", 1000]}
            speed={50}
            repeat={Infinity}
          />
        </motion.p>
        <motion.p
          className=" text-center      md:text-start  md:text-xl md:leading-8"
          initial={{ opacity: 0, x: -100, y: 50 }} // Initial position to the left
          animate={{ x: 0, y: 0, opacity: 1 }} // Animate to the center
          transition={{ duration: 1 }}>
          Welcome to Mozisha, a platform where africa s brightest talents unite to empower global businesses by providing efficient outsourcing solutions elevating your startup's potential. Our mission is clear : to nurture african talent and connect them with businesses worldwide we aim to help companies scale efficiently while creating opportunities for our talented workforce. Join us in forging collaborative partnerships where our shared success matters most.
        </motion.p>
        <div className="flex justify-between mt-6">
        <div>
            <p className="text-3xl font-bold text-violet-800  text-center">
              <CountUp end={20}  duration={5}/> +
            </p>
            <p className="text-center"> Talented Pros</p>
          </div>
          <div>
            
            <p className="text-3xl text-center font-bold text-violet-800">
              <CountUp end={10} duration={5}/> +
            </p>
            <p className="text-center">Services offered</p>
          </div>
          <div>
          
            <p className="text-3xl text-center font-bold text-violet-800">
              <CountUp end={50} duration={5}/> +
            </p>
            <p className="text-center">Satisfied Clients</p>
          </div>
        </div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" mt-8    ">
          <img
            src={Heroimg}
            alt=""
            className=" object-cover rounded-md md:h-[40rem]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
