import React from "react";
import Slider from "react-slick";
import Image1 from "../assets/images/ripplemock.png";
import Image2 from "../assets/images/wallmock.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Build Brands",
    title: "Eco-logicAds",
    title2: "Rippled PaperCups",
  },
  {
    id: 2,
    img: Image1,
    subtitle: "Build Brands",
    title: "Eco-logicAds",
    title2: "Cold PaperCups",
  },
  {
    id: 3,
    img: Image1,
    subtitle: "Build Brands",
    title: "Eco-logicAds",
    title2: "Wall PaperCups",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
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
    <div className="container">
      <div className="overflow-hidden rounded-3xl  bg-green-200/40 flex justify-center items-center">
        <div className="container py-8 pb-12">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-0 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1 className="text-2xl text-[#1B4723] sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl text-[#146924] sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-[#1B4723]/20 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                  </div>
                  <div className="order-1 sm:order-2">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] sm:w-[500px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-125 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                    />
                  </div>
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
