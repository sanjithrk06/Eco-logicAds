import Heading from "./Heading";
import ProductCard from "./ProductCard";
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

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-main">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center max-w-[600px] mx-auto space-y-2">
            <h1 className=" title-attribute">Our Products</h1>
            <p className="subTitle-attribute">
              Eco-Effective Advertising Solutions
            </p>
          </div>
        </motion.div>
        <ProductCard data={ProductsData} />
      </div>
    </motion.div>
  );
};

export default Products;
