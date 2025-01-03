import React from "react";
import { motion } from "framer-motion";
import peak from "../assets/images/peak.png";
import eco from "../assets/images/eco.png";
import cost from "../assets/images/cost.png";

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

// Header animation variants
const headerVariants = {
  hidden: { 
    opacity: 0,
    y: -20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Card animation variants
const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Icon animation variants
const iconVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const Banner = () => {
  return (
    <motion.div 
      className="container-main"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
        className="mx-auto text-center max-w-screen-sm"
        variants={headerVariants}
      >
        <h2 className="title-attribute text-3xl">Why Cup Advertising ?</h2>
        <p className="subTitle-attribute">Revolutionize Your Advertising</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-2">
        {[
          {
            icon: peak,
            title: "High Visibility",
            description: "Paper cups travel, ensuring your brand reaches a wide and diverse audience."
          },
          {
            icon: eco,
            title: "Eco-Friendly Promotion",
            description: "Promote your business while supporting sustainable practices that align with modern values."
          },
          {
            icon: cost,
            title: "Cost-Effective Impact",
            description: "Maximize exposure and engagement with a budget-friendly advertising solution."
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center"
          >
            <motion.span 
              className="inline-block p-3 rounded-3xl bg-secondary/70"
              variants={iconVariants}
              whileHover="hover"
            >
              <motion.img 
                className="w-20 h-20 filter-primary"
                src={item.icon}
                alt=""
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
            </motion.span>

            <motion.h2 
              variants={cardVariants}
              className="font-raleway font-semibold text-text leading-relaxed text-center text-lg pt-2"
            >
              {item.title}
            </motion.h2>
            
            <motion.p 
              variants={cardVariants}
              className="font-raleway font-normal text-text/80 text-base text-center mt-2 px-8"
            >
              {item.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Banner;