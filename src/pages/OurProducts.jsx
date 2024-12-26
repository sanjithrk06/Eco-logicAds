import Heading from "../components/Heading";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

import ripple from "../assets/images/ripple.png";
import cold from "../assets/images/cold.png";
import doublewall from "../assets/images/doublewall.png";
import wall from "../assets/images/wall.png";

const ProductsData = [
  { id: 1, img: ripple, title: "Ripple Cups", price: "2.50" },
  { id: 2, img: cold, title: "Cold Cups", price: "3.35" },
  {
    id: 3,
    img: doublewall,
    title: "Double Wall Paper Cups",
    price: "3.00",
  },
  {
    id: 4,
    img: wall,
    title: "Single Wall Paper Cups",
    price: "1.22",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const OurProducts = () => {
  return (
    <motion.div
      id="shop"
      className="pt-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mb-24">
        <motion.div variants={itemVariants}>
          <Heading
            title="Our Products"
            subtitle="Eco-Effective Advertising Solutions"
          />
        </motion.div>
        <ProductCard data={ProductsData} />
      </div>
    </motion.div>
  );
};

export default OurProducts;
