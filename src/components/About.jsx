import React from "react";
import about from "../assets/images/about.jpg";
import { motion } from "framer-motion";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Animation variants for individual elements
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

// Image animation variants
const imageVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 1,
    },
  },
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="container-main pt-16"
    >
      <div className="w-full max-w-6xl px-4 md:px-5 lg:px-5 mx-auto">
        <motion.div
          variants={itemVariants}
          className="mx-auto text-center max-w-screen-sm"
        >
          <h2 className="title-attribute text-3xl">Who We Are ?</h2>
          <p className="subTitle-attribute">
            The Eco-Logical Choice for Advertising
          </p>
        </motion.div>

        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <motion.div
            variants={imageVariants}
            className="w-full lg:justify-start justify-center items-start flex"
          >
            <div className="sm:w-[500px] w-full sm:h-[350px] h-full sm:bg-green-50/70 rounded-3xl sm:border border-green-200/70 relative">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src={about}
                alt="about Us image"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
          >
            <motion.div
              variants={itemVariants}
              className="w-full flex-col justify-center items-start gap-4 flex"
            >
              <motion.p variants={itemVariants} className="main-para">
                At Eco-logicAds, we redefine everyday products with innovative,
                eco-friendly alternatives to traditional plastics. Committed to
                sustainability, we focus on reducing single-use plastic waste
                through creative and responsible solutions, inspiring conscious
                consumption for a greener future.
              </motion.p>
              <motion.p variants={itemVariants} className="secondary-para">
                Our mission is to empower individuals and businesses with
                convenient, high-quality options that support a greener, more
                sustainable future. By championing sustainability, we aim to
                make eco-conscious choices more accessible and impactful.
                Together, we can pave the way for a healthier planet and a
                brighter future for generations to come.
              </motion.p>
            </motion.div>
            <motion.a
              href="/about"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-secondary text-primary text-sm font-semibold font-raleway hover:ring-1 hover:ring-primary hover:bg-secondary hover:text-primary cursor-pointer py-2 px-5 w-auto rounded-xl duration-300 z-10 flex flex-row group pr-0 ease-in">
                Read More
                <svg
                  className="opacity-0 invisible group-hover:mx-1 group-hover:mr-3 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                    stroke="#66B539"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
