import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const handleProductDetails = (id) => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Navigate to the product details page with the item's data as parameters
    navigate(`/product/${id}`, { state: id });
  };

  return (
    <motion.div
      className="mb-10 font-raleway w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((item) => (
          <motion.div
            className="group"
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden">
              <motion.img
                variants={imageVariants}
                src={item.img}
                alt={item.title}
                className="h-[280px] w-[360px] object-cover rounded-md bg-secondary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                initial={{ opacity: 0, backdrop: "blur(0px)" }}
                whileHover={{
                  opacity: 1,
                  backdropFilter: "blur(8px)",
                  transition: { duration: 0.3 },
                }}
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center rounded-md flex justify-center items-center"
              >
                <motion.button
                  onClick={() => handleProductDetails(item.id)}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.1, duration: 0.3 },
                  }}
                  className="btn-primary hover:bg-green-50 transform"
                >
                  Product Details
                </motion.button>
              </motion.div>
            </div>
            <motion.div className="leading-7 py-2" variants={cardVariants}>
              <h2 className="font-semibold text-text">{item.title}</h2>
              <h2 className="font-normal text-primary">₹{item.price}</h2>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductCard;
