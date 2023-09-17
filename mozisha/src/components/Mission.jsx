import React from 'react'
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div>
      <div>

      <h2 className='text-4xl font-bold text-center mt-12 md:mt-20 text-violet-500'>Our Mission</h2>
    <motion.p
          className=" text-center       md:text-start mt-6 md:text-xl md:leading-8"
          initial={{ opacity: 0, x: -100, y: 50 }} // Initial position to the left
          animate={{ x: 0, y: 0, opacity: 1 }} // Animate to the center
          transition={{ duration: 1 }}>
          At Mozisha, our mission is clear: to nurture African talent and connect them with businesses worldwide. Through these partnerships, we aim to help companies scale efficiently while creating opportunities for our talented workforce.
        </motion.p></div>
      </div>
  )
}

export default Mission