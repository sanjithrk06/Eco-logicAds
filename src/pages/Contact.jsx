import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "9123548812";
    const message = `
      Hi, There! *${formData.subject}*\n\n${formData.message}\n\n*My Details:*\n${formData.name}\n${formData.mobile}\n${formData.email} 
    `.trim();
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <motion.div
      className="container max-w-7xl py-8 mx-auto px-5 md:px-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="mx-auto text-center mb-2 max-w-screen-sm lg:mb-4"
        variants={itemVariants}
      >
        <h2 className="title-attribute">Product Inquiry</h2>
        <p className="subTitle-attribute">
          Get the Details You Need to Make an Informed Choice
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-10 lg:pb-16 px-4 mx-auto max-w-6xl">
        <motion.div className="lg:w-2/3" variants={itemVariants}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block mb-2 main-para">
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-primary/30 secondary-para text-sm rounded-lg focus:ring-primary focus:ring-1 outline-none block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </motion.div>
            <div className="flex flex-col md:flex-row w-full justify-between gap-4">
              <motion.div className="md:w-1/2" variants={itemVariants}>
                <label htmlFor="email" className="block mb-2 main-para">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-primary/30 secondary-para text-sm rounded-lg focus:ring-primary focus:ring-1 outline-none block w-full p-2.5"
                  placeholder="name@gmail.com"
                  required
                />
              </motion.div>
              <motion.div className="md:w-1/2" variants={itemVariants}>
                <label htmlFor="mobile" className="block mb-2 main-para">
                  Your mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-primary/30 secondary-para text-sm rounded-lg focus:ring-primary focus:ring-1 outline-none block w-full p-2.5"
                  placeholder="1234567890"
                  required
                />
              </motion.div>
            </div>
            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block mb-2 main-para">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-primary/30 secondary-para text-sm rounded-lg focus:ring-primary focus:ring-1 outline-none block w-full p-2.5"
                placeholder="Let us know how we can help you"
                required
              />
            </motion.div>
            <motion.div className="sm:col-span-2" variants={itemVariants}>
              <label htmlFor="message" className="block mb-2 main-para">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-primary/30 secondary-para text-sm rounded-lg focus:ring-primary focus:ring-1 outline-none block w-full p-2.5"
                placeholder="Leave a comment..."
              ></textarea>
            </motion.div>
            <motion.div className="flex justify-center" variants={itemVariants}>
              <button type="submit" className="btn-primary">
                Send message
              </button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          className="lg:w-1/3 lg:pl-10 flex flex-col gap-20 text-center sm:flex-row justify-between"
          variants={itemVariants}
        >
          <motion.div className="basis-full flex flex-col gap-10 flex-wrap justify-evenly md:basis-3/3">
            <motion.div variants={itemVariants}>
              <span className="inline-block p-3 text-primary bg-secondary/80 rounded-full">
                <Mail />
              </span>
              <h2 className="mt-2 main-para font-bold text-center text-base text-text">
                Email
              </h2>
              <p className="mt-2 text-sm secondary-para text-center">
                Our friendly team is here to help.
                <br /> Instead{" "}
                <a
                  href="https://wa.me/9123548812"
                  className="text-primary font-semibold"
                >
                  Whatsapp
                </a>
              </p>
              <a
                href="mailto:ranjitkumar1180@gmail.com"
                rel="noopener"
                target="_top"
                className="mt-2 text-sm cursor-pointer main-para"
              >
                ranjitkumar1180@gmail.com
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <span className="inline-block p-3 text-primary bg-secondary/80 rounded-full">
                <MapPin />
              </span>
              <h2 className="mt-2 main-para font-bold text-center text-base text-text">
                Address
              </h2>
              <p className="mt-2 text-sm secondary-para text-center">
                Reach out our office.
              </p>
              <a
                href="https://maps.app.goo.gl/RXC8CwTpbUfgQrDR6"
                rel="noreferrer"
                target="_blank"
                className="mt-2 text-sm cursor-pointer main-para"
              >
                18/101-2 Kairbetta, Donington post, <br />
                Kotagiri, The Nilgiris-643217
              </a>
              <p className="mt-2 secondary-para text-text text-center text-sm">
                8:00 A.M to 8:00 P.M
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <span className="inline-block p-3 text-primary bg-secondary/80 rounded-full">
                <Phone />
              </span>
              <h2 className="mt-2 main-para font-bold text-center text-base text-text">
                Help-Line
              </h2>
              <p className="mt-2 text-sm secondary-para text-center">
                Any doubts?, <br />
                Our friendly team is here to help
              </p>
              <a
                className="mt-2 text-sm cursor-pointer main-para"
                rel="noreferrer"
                target="_blank"
                href="tel:9123548812"
              >
                9123548812
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.7101501985712!2d76.87423724999998!3d11.428571350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8c1cb0fae4cd9%3A0x28fd78cb2b924cb3!2sKairbetta%2C%20Kotagiri%2C%20Tamil%20Nadu%20643217!5e0!3m2!1sen!2sin!4v1735187685809!5m2!1sen!2sin"
        className="w-full h-[40vh] border-4 border-primary/50 drop-shadow-lg rounded-xl my-6 mx-auto"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        variants={itemVariants}
      ></motion.iframe>
    </motion.div>
  );
};

export default Contact;
