import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="container max-w-6xl py-24 text-center mx-auto px-5 md:px-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="font-medium text-xl tracking-wider mb-6 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
        variants={itemVariants}
      >
        Having Questions?
      </motion.h2>
      <motion.h3
        className="text-4xl sm:text-6xl text-green-500 uppercase tracking-wider px-16 leading-10 sm:px-0 mb-6 font-semibold"
        variants={itemVariants}
      >
        Contact Us
      </motion.h3>
      <motion.div
        className="flex flex-col gap-20 sm:flex-row justify-between mt-20"
        variants={containerVariants}
      >
        <motion.div
          className="basis-full flex flex-row gap-10 flex-wrap justify-evenly md:basis-3/3"
          variants={containerVariants}
        >
          {[
            {
              title: "Email",
              description: (
                <>
                  Our friendly team is here to help.
                  <br /> Instead{" "}
                  <a
                    href="https://wa.me/6381137437"
                    className="text-accent font-semibold"
                  >
                    Whatsapp
                  </a>
                </>
              ),
              link: {
                href: "mailto:bitvprayukti@bitsathy.ac.in",
                label: "bitvprayukti@bitsathy.ac.in",
              },
              svgPath:
                "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
            },
            {
              title: "Address",
              description: "Reach out our college.",
              link: {
                href: "https://goo.gl/maps/w7LzzgoxfPDWQ8bY7",
                label:
                  "Bannari Amman Institute of Technology, Sathyamangalam, Erode-638401",
              },
              svgPath:
                "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
            },
            {
              title: "Help-Line",
              description: (
                <>
                  Any doubts?,
                  <br />
                  Our friendly team is here to help
                </>
              ),
              link: {
                href: "tel:6381137437",
                label: "6381137437",
              },
              svgPath:
                "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border-2 border-green-600 p-5 rounded-xl bg-green-50/50"
              variants={itemVariants}
              whileHover="hover"
            >
              <span className="inline-block p-3 text-accent rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.svgPath}
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-green-500">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-dimWhite">{item.description}</p>
              <a
                href={item.link.href}
                className="mt-2 text-sm text-accent cursor-pointer"
              >
                {item.link.label}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
