import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.avif";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Container animation variants
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

// Content section variants
const sectionVariants = {
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

// List item variants
const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
    },
  },
};

const links = [
  { name: "My Story", link: "/#mystory" },
  { name: "Our Products", link: "/our-products" },
  { name: "Contact Us", link: "/contact" },
];

const products = [
  { name: "Ripple Cups", id: "1" },
  { name: "Cold Cups", id: "2" },
  { name: "Double Wall Cups", id: "3" },
  { name: "Single Wall Cups", id: "4" },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleProductDetails = (id) => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Navigate to the product details page with the item's data as parameters
    navigate(`/product/${id}`, { state: id });
  };

  return (
    <motion.footer
      className="bg-gradient-to-t from-secondary via-secondary/70 to-secondary/20 shadow-2xl shadow-secondary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-6 lg:pt-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:gap-14 py-5">
          <motion.div
            className="md:w-3/6 mb-6 md:mb-0 flex flex-col items-center md:items-start justify-center"
            variants={sectionVariants}
          >
            <motion.a
              href="/#"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={logo}
                className="w-[45px] mr-2"
                alt="Eco-logicAds Logo"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="logo-attribute">Eco-logicAds</span>
            </motion.a>
            <motion.p
              className="mt-4 secondary-para text-center md:text-left"
              variants={sectionVariants}
            >
              Eco-logicAds is a dynamic startup transforming everyday products
              by offering innovative, eco-friendly alternatives to traditional
              plastics.{" "}
            </motion.p>
            <motion.p
              className="mt-2 secondary-para text-text text-center md:text-left"
              variants={sectionVariants}
            >
              <b className="main-para text-text">Working Hours :</b> 8:00 A.M to
              8:00 P.M
            </motion.p>
          </motion.div>

          <motion.div
            className="md:w-3/6 flex flex-col sm:flex-row items-center md:items-start justify-end text-center gap-8 sm:gap-20"
            variants={sectionVariants}
          >
            <motion.div variants={sectionVariants}>
              <h2 className="uppercase subTitle-attribute text-base pb-4">
                Important Links
              </h2>
              <ul className="main-para text-center flex flex-col gap-2 font-normal">
                {links.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    custom={index}
                    whileHover="hover"
                  >
                    <a href={item.link} className="hover:underline">
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={sectionVariants}>
              <h2 className="uppercase subTitle-attribute text-base pb-4">
                Our Products
              </h2>
              <ul className="main-para text-center flex flex-col gap-2 font-normal">
                {products.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    custom={index}
                    whileHover="hover"
                  >
                    <a
                      onClick={() => handleProductDetails(item.id)}
                      className="hover:underline cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={sectionVariants}>
              <h2 className="uppercase subTitle-attribute text-base pb-4">
                Social Media
              </h2>
              <ul className="flex justify-center gap-1 space-x-2">
                {[
                  {
                    icon: (
                      <FaLinkedinIn className="w-7 h-7 text-white bg-primary rounded-xl p-1" />
                    ),
                    href: "https://www.linkedin.com/in/ranjith-kumar-156706171/",
                  },
                  {
                    icon: (
                      <Mail className="w-7 h-7 text-white bg-primary rounded-xl p-1" />
                    ),
                    href: "mailto:ranjith@ecologicads.in",
                  },
                ].map((social, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      className="text-[#39569c] hover:text-gray-900"
                    >
                      {social.icon}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.hr
          className="border-heading/30 sm:mx-auto pt-4"
          variants={sectionVariants}
        />

        <motion.div
          className="flex items-center justify-center"
          variants={sectionVariants}
        >
          <span className="main-para font-normal text-sm text-center">
            © {new Date().getFullYear()}{" "}
            <motion.a
              href="/#"
              className="hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              Eco-logicAds
            </motion.a>
            . All Rights Reserved.
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
