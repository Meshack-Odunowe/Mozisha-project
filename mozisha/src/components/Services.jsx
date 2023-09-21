/* eslint-disable react/no-unescaped-entities */
import {
  HiOutlineCurrencyDollar,
  HiOutlineRocketLaunch,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { IoManSharp, IoPlanetOutline } from "react-icons/io5";
import { GiLifeSupport } from "react-icons/gi";
import WhyMozisha from '../assets/Why-mozisha.jpg'
import Why2 from '../assets/why2.jpg'
import Why3 from '../assets/why3.jpg'
import Why4 from '../assets/why4.jpg'
import Why5 from '../assets/why5.webp'
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div name="services" className="border-t-4 border-violet-200  ">
      <h2 className="text-4xl font-bold text-center mt-40 md:mt-20 text-violet-500 ">
        Services We Offer
      </h2>
      <div className=" flex md:flex-row flex-col items-center flex-wrap w-full justify-evenly  gap-3   ">
        <div className="border-violet-800  rounded-lg mt-8 p-8 max-w-[300px]  md:w-full bg-violet-400 h-full hover:scale-120">
          <div>
            <div className="bg-violet-800 w-fit p-5 rounded-full text-violet-200 mt-8 mb-4  mx-auto ">
              <HiOutlineRocketLaunch className="text-4xl" />
            </div>
          </div>
          <h5 className="font-bold text-center mb-8 text-2xl text-violet-900">
            {" "}
            Business Development
          </h5>
          <p className="text-center mb-8">
            Partner with Mozisha's experts to shape your path to growth. We
            offer customized strategies to drive expansion and profitability.
          </p>
        </div>
        <div className="border-violet-800  rounded-lg mt-8 p-8 max-w-[300px]  md:w-full bg-violet-400 h-full hover:scale-120">
          <div>
            <div className="bg-violet-800 w-fit p-5 rounded-full text-violet-200 mt-8 mb-4  mx-auto ">
              <HiOutlineCurrencyDollar className="text-4xl" />
            </div>
          </div>
          <h5 className="font-bold text-center mb-8 text-2xl text-violet-900">
            Sales and Marketing
          </h5>
          <p className="text-center mb-8">
            Enhance your brand's reach with our sales and marketing specialists.
            From market insights to lead generation, we help bolster your sales
            pipeline.
          </p>
        </div>
        <div className="border-violet-800  rounded-lg mt-8 p-8 max-w-[300px]  md:w-full bg-violet-400 h-full hover:scale-120">
          <div>
            <div className="bg-violet-800 w-fit p-5 rounded-full text-violet-200 mt-8 mb-4  mx-auto ">
              <HiOutlineWrenchScrewdriver className="text-4xl" />
            </div>
          </div>
          <h5 className="font-bold text-center mb-8 text-2xl text-violet-900">
            Design Services
          </h5>
          <p className="text-center mb-8">
            Transform your brand's identity with our creative design team. We
            craft compelling designs, from logos to websites, to captivate your
            audience.
          </p>
        </div>
        <div className="border-violet-800  rounded-lg mt-8 p-8 max-w-[300px]  md:w-full bg-violet-400 h-full hover:scale-120">
          <div>
            <div className="bg-violet-800 w-fit p-5 rounded-full text-violet-200 mt-8 mb-4  mx-auto ">
              <IoPlanetOutline className="text-4xl" />
            </div>
          </div>
          <h5 className="font-bold text-center mb-8 text-2xl text-violet-900">
            {" "}
            Executive Assistant and Admin Support
          </h5>
          <p className="text-center mb-8">
            Delegate operational tasks, allowing you to focus on your vision.
            Our executive assistants provide top-tier administrative support,
            ensuring your operations run smoothly.
          </p>
        </div>
        <div className="border-violet-800  rounded-lg mt-8 p-8 max-w-[300px]  md:w-full bg-violet-400 h-full hover:scale-120">
          <div>
            <div className="bg-violet-800 w-fit p-5 rounded-full text-violet-200 mt-8 mb-4  mx-auto ">
              <IoManSharp className="text-4xl" />
            </div>
          </div>
          <h5 className="font-bold text-center mb-8 text-2xl text-violet-900">
            Customer Service
          </h5>
          <p className="text-center mb-8">
            Deliver exceptional customer experiences with our skilled
            professionals. Our 24/7 support ensures customer satisfaction.
          </p>
        </div>
        <div className="border-violet-800  rounded-lg mt-8 p-8 max-w-[300px]  md:w-full bg-violet-400 h-full hover:scale-120">
          <div>
            <div className="bg-violet-800 w-fit p-5 rounded-full text-violet-200 mt-8 mb-4  mx-auto ">
              <GiLifeSupport className="text-4xl" />
            </div>
          </div>
          <h5 className="font-bold text-center mb-8 text-2xl text-violet-900">
            {" "}
            IT and Technical Support
          </h5>
          <p className="text-center mb-8">
            Ensure seamless technology operations with our IT and technical
            support expertise. From IT helpdesk support to software development
            and cybersecurity, we've got you covered.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-center text-4xl  text-violet-700 mb-8 mt-16">
            Why Mozisha
          </h4>

          <div className=" md:flex md:gap-9 items-center text-center md:text-start">
            <div>

              <h5 className="text-2xl text-violet-600 mb-2"> African Talent, Global Impact</h5>
              <p className="leading-8">We believe in the immense potential of African talent. By partnering with Mozisha, you access a rich pool of skilled professionals ready to make a global impact.</p>
            </div>
            <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" mt-8    ">
          <img
            src={WhyMozisha}
            alt=""
            className=" object-cover rounded-md md:h-[40rem]"
          />
        </motion.div>
          </div>
          <div className=" md:flex md:gap-9 md:flex-row-reverse items-center text-center md:text-start md:mt-16">
            <div>

              <h5 className="text-2xl text-violet-600 mb-2 mt-16 md:mt24"> Focus on Your Core Business</h5>
              <p className="leading-8">Mozisha handles operational tasks, allowing you to concentrate on your startup's core activities, innovation, and growth strategies.</p>
            </div>
            <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" mt-8    ">
          <img
            src={Why2}
            alt=""
            className=" object-cover rounded-md md:h-[40rem]"
          />
        </motion.div>
          </div>



          <div className=" md:grid md:grid-cols-2 md:gap-9 items-center text-center md:text-start mt-16">
            <div>

              <h5 className="text-2xl text-violet-600 mb-2"> Quality Assurance</h5>
              <p className="leading-8">Excellence is our commitment. Our rigorous quality control measures ensure your projects meet the highest standards.</p>
            </div>
            <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" mt-8    ">
          <img
            src={Why3}
            alt=""
            className=" object-cover rounded-md md:h-[40rem]"
          />
        </motion.div>
          </div>



          <div className=" md:flex md:gap-9 md:flex-row-reverse items-center text-center md:text-start md:mt-16">
            <div>

              <h5 className="text-2xl text-violet-600 mb-2 mt-16 md:mt24"> Scalability and Cost-Efficiency</h5>
              <p className="leading-8">Scale your operations seamlessly while reducing costs. Mozisha offers flexible solutions that adapt to your business needs.</p>
            </div>
            <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" mt-8    ">
          <img
            src={Why4}
            alt=""
            className=" object-cover rounded-md md:h-[40rem]"
          />
        </motion.div>
          </div>

          
          <div className=" md:grid md:grid-cols-2  md:gap-9 items-center text-center md:text-start mt-16">
            <div>

              <h5 className="text-2xl text-violet-600 mb-2">Collaborative Partnerships</h5>
              <p className="leading-8">We view our clients as partners, with success intertwined. Together, we achieve more.</p>
            </div>
            <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" mt-8    ">
          <img
            src={Why5}
            alt=""
            className=" object-cover rounded-md md:h-[40rem]"
          />
        </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
