import React from "react";
import { motion } from "framer-motion";
import about from "../assets/images/about.avif";

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

// Text content variants
const textVariants = {
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
    },
  },
};

// Image variants
const imageVariants = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Story = () => {
  return (
    <motion.div
      className="container-main"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="text-start" variants={textVariants}>
        <motion.h6
          className="title-attribute"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Story...
        </motion.h6>
        <motion.h2
          className="subTitle-attribute"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hungry to create an Impact
        </motion.h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 xl:gap-12 items-center">
        <motion.div
          className="flex flex-col lg:items-start items-center gap-0"
          variants={textVariants}
        >
          <motion.p className="secondary-para" variants={textVariants}>
            Eco-logicAds is a dynamic startup transforming everyday products by
            offering innovative, eco-friendly alternatives to traditional
            plastics. Driven by the belief that small changes can lead to big
            environmental impacts, the company focuses on sustainable, practical
            solutions to reduce single-use plastic waste. Eco-logicAds combines
            creativity, responsibility, and advanced technology to inspire
            conscious consumption and promote environmental stewardship. Their
            mission is to empower individuals and businesses with high-quality,
            convenient options that align with a greener, more sustainable
            future. By championing sustainability, Eco-logicAds is making it
            easier for everyone to make eco-conscious choices that benefit the
            planet and future generations.
          </motion.p>

          <motion.span
            className="p-2 text-center text-text text-base font-medium leading-6"
            variants={textVariants}
            whileHover={{ scale: 1.02 }}
          >
            We are funded by{" "}
            <motion.b
              className="text-primary/80"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              RKVY RAFTAAR
            </motion.b>{" "}
            and{" "}
            <motion.b
              className="text-primary/80"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              SISFS DLABS HYDERABAD
            </motion.b>
          </motion.span>
        </motion.div>

        <motion.div className="w-full md:pl-10" variants={imageVariants}>
          <motion.img
            className="h-full md:h-[55vh] object-contain rounded-3xl"
            src={about}
            alt="about Us image"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Story;
