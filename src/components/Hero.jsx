import React from "react";
import Slider from "react-slick";
import Image2 from "../assets/images/ripplemock.png";
import Image1 from "../assets/images/wallmock.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Sustainability First",
    title: "Eco-logicAds",
    title2: "Green Solutions",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Innovative Packaging",
    title: "Eco-logicAds",
    title2: "Eco PaperCups",
  },
  {
    id: 3,
    img: Image2,
    subtitle: "Eco-Friendly Designs",
    title: "Eco-logicAds",
    title2: "Smart Packaging",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-25px",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <button>{i + 1}</button>
      </div>
    ),
  };

  return (
    <div className="container-main my-3 mb-12 mx-auto max-w-7xl">
      <div className="overflow-hidden rounded-3xl bg-secondary flex justify-center items-center">
        <div className="container py-8 pb-12">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <motion.div
                    className="flex flex-col justify-center gap-0 md:pl-3 pt-12 md:pt-0 text-center md:text-left order-2 md:order-1 relative z-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl text-primary md:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-4xl text-text md:text-5xl lg:text-6xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-4xl uppercase text-primary/20 md:text-6xl lg:text-9xl font-bold">
                      {data.title2}
                    </h1>
                  </motion.div>
                  <motion.div
                    className="order-1 md:order-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] md:w-[500px] h-[300px] md:h-[450px] md:scale-125 lg:scale-125 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
