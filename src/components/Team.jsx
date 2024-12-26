import React from "react";
import { motion } from "framer-motion";
import coo from "../assets/images/coo.avif";
import ceo from "../assets/images/ceo.avif";
import cs from "../assets/images/cs.avif";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Header variants
const headerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
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

// Profile card variants
const profileVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Social icons variants
const socialIconsVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const Team = () => {
  const teamMembers = [
    {
      image: coo,
      name: "CREYSAC FLORANCE",
      position: "COO",
      linkedin: "https://www.linkedin.com/in/a-creysac-florance-75059b199",
      email: "mailto:creysac@ecologicads.in",
    },
    {
      image: ceo,
      name: "RANJITH",
      position: "CEO",
      linkedin: "https://www.linkedin.com/in/ranjith-kumar-156706171/",
      email: "mailto:ranjith@ecologicads.in",
    },
    {
      image: cs,
      name: "NARESH KUMAR",
      position: "Cheif Strategist",
      linkedin: "https://www.linkedin.com/in/naresh-kumar-3553231b3",
      email: "mailto:naresh@ecologicads.in",
    },
  ];

  return (
    <motion.div
      className="container-main mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="px-4 text-center lg:px-6">
        <motion.div variants={headerVariants}>
          <h2 className="title-attribute">Our team</h2>
          <p className="subTitle-attribute">Meet the Visionaries</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-evenly gap-8 lg:gap-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center text-gray-500"
              variants={profileVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                className="mx-auto mb-4 w-40 h-40 rounded-full object-cover"
                src={member.image}
                alt={`${member.name} Avatar`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              />
              <motion.h3
                className="font-raleway font-semibold text-text leading-relaxed text-center text-lg pt-2"
                variants={profileVariants}
              >
                {member.name}
              </motion.h3>
              <motion.p
                className="font-raleway font-normal text-primary text-base text-center px-8"
                variants={profileVariants}
              >
                {member.position}
              </motion.p>

              <motion.ul
                className="flex justify-center mt-4 space-x-4"
                variants={socialIconsVariants}
              >
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href={member.linkedin} target="_blank">
                    <FaLinkedinIn className="w-7 h-7 text-white bg-primary rounded-xl p-1" />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href={member.email} target="_blank">
                    <Mail className="w-7 h-7 text-white bg-primary rounded-xl p-1" />
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
