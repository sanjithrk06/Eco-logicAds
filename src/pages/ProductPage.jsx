import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Products } from "../constant.js";
import { NavLink } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  const productId = location.state;

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const product = Products[productId - 1 || 0];
  console.log(
    "Id :",
    productId,
    "Fetched Product :",
    product,
    "Products array:",
    Products
  );
  const [mainImage, setMainImage] = useState(product.images[1]);
  const [selectedSize, setSelectedSize] = useState("4OZ");

  const changeImage = (src) => {
    setMainImage(src);
  };

  const sizeMapping = {
    "2OZ": "120ml",
    "4OZ": "240ml",
    "8OZ": "360ml",
    "12OZ": "480ml",
    "16OZ": "570ml",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <div className="container pt-5 pl-16">
        <nav className="flex">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <motion.a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary/50 hover:text-primary"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </motion.a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-primary/50 mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <motion.p
                  className="ms-1 text-sm font-medium text-primary/50 hover:text-primary cursor-pointer md:ms-2"
                  whileHover={{ scale: 1.1 }}
                >
                  Product
                </motion.p>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-primary mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <motion.span
                  className="ms-1 text-sm font-medium text-primary md:ms-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {product.name}
                </motion.span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container ">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <motion.div
              className="w-full md:w-1/2 px-4 mb-8"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={mainImage}
                alt="Product"
                className="w-full h-[40vh] sm:h-[70vh] rounded-xl object-contain bg-secondary/40 drop-shadow-md mb-4"
                id="mainImage"
                layout
              />
              <motion.div
                className="flex gap-4 py-4 justify-center overflow-x-auto"
                whileHover={{ scale: 1.05 }}
              >
                {product.images.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="size-16 sm:size-20 bg-secondary/20 hover:border hover:border-secondary object-cover rounded-md cursor-pointer drop-shadow-md opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(src)}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              className="w-full md:w-1/2 px-4"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="subTitle-attribute pb-2">{product.name}</h2>
              <p className="title-attribute font-light text-sm mb-4">
                SKU: {product.sku}
              </p>
              <p className="secondary-para mb-4">{product.description}</p>
              <div className="mb-4">
                <span className="subTitle-attribute text-xl font-semibold mr-2">
                  ₹{product.price[selectedSize]}
                </span>
                <span className="title-attribute text-base">
                  ({sizeMapping[selectedSize]})
                </span>
              </div>
              <div className=" border my-4 border-primary/10"></div>
              <div className="mb-2">
                <h3 className="inline-block main-para text-text pr-2">
                  Variant:
                </h3>
                <p className="inline-block secondary-para font-normal">
                  {product.design.join(", ")}
                </p>
              </div>
              <div className="mb-4">
                <h3 className="inline-block main-para text-text pr-2">
                  Color:
                </h3>
                <div className="flex pl-2 space-x-2">
                  {product.color.map((hex, index) => (
                    <button
                      key={index}
                      className="w-5 h-5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                      style={{ backgroundColor: hex }}
                    ></button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="inline-block main-para text-text pr-2">Size:</h3>
                <div className="inline-flex gap-3 text-sm font-medium text-gray-600">
                  {Object.entries(product.price).map(([size, price], index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`bg-gray-100 border border-gray-200 hover:bg-secondary/30  hover:text-primary hover:border-green-800/30 active:bg-secondary/30  active:text-primary active:border-primary/30 font-raleway rounded-lg p-2 ${
                        selectedSize === size
                          ? "bg-secondary/30 text-primary border-primary/30"
                          : ""
                      }`}
                    >
                      {size} ({sizeMapping[size]})
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <NavLink to={"/contact/#"}>
                  <button className="btn-primary">Product Inquiry</button>
                </NavLink>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductPage;
