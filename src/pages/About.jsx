import React from "react";
import Heading from "../components/Heading";
import about from "../assets/images/about.avif";
import coo from "../assets/images/coo.avif";
import ceo from "../assets/images/ceo.avif";
import cs from "../assets/images/cs.avif";

const About = () => {
  return (
    <div>
      <div className=" container mb-24 pt-10">
        <Heading title="About Us" />
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-0 flex">
                    <h6 className="text-[#1B4723]/60 text-xl font-semibold leading-tight">
                      Our Story
                    </h6>
                    <h2 className="text-[#146924] text-4xl font-bold font-manrope leading-tight pb-3 lg:text-start text-center">
                      Hungry to create an Impact
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Eco-logicAds is a dynamic startup transforming everyday
                      products by offering innovative, eco-friendly alternatives
                      to traditional plastics. Driven by the belief that small
                      changes can lead to big environmental impacts, the company
                      focuses on sustainable, practical solutions to reduce
                      single-use plastic waste. Eco-logicAds combines
                      creativity, responsibility, and advanced technology to
                      inspire conscious consumption and promote environmental
                      stewardship. Their mission is to empower individuals and
                      businesses with high-quality, convenient options that
                      align with a greener, more sustainable future. By
                      championing sustainability, Eco-logicAds is making it
                      easier for everyone to make eco-conscious choices that
                      benefit the planet and future generations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:w-fit w-full group px-3.5 py-2 bg-green-50/30 rounded-lg transition-all duration-700 ease-in-out justify-center items-center flex">
                <span className="px-1.5 text-[#146924] text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                  We are funded by <b>RKVY RAFTAAR</b> and{" "}
                  <b>SISFS DLABS HYDERABAD</b>
                </span>
              </div>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className=" w-full p-10 h-full">
                <img
                  className="w-full h-full object-contain rounded-3xl"
                  src={about}
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-3xl tracking-tight font-bold text-gray-900 ">
              Our team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl ">
              Meet the Visionaries Driving Sustainability Forward
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-evenly gap-8 lg:gap-16 ">
            <div className="text-center text-gray-500 ">
              <img
                className="mx-auto mb-4 w-40 h-40 rounded-full object-cover"
                src={coo}
                alt="Creysac Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                <a href="#">CREYSAC FLORANCE</a>
              </h3>
              <p>COO</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/a-creysac-florance-75059b199"
                    target="_blank"
                    className="text-[#39569c] hover:text-gray-900 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="7.025 7.025 497.951 497.95"
                      id="linkedin"
                    >
                      <linearGradient
                        id="a"
                        x1="-974.482"
                        x2="-622.378"
                        y1="1306.773"
                        y2="1658.877"
                        gradientTransform="translate(1054.43 -1226.825)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#2489be"></stop>
                        <stop offset="1" stop-color="#0575b3"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:creysac@ecologicads.in"
                    target="_blank"
                    className="text-[#00acee] hover:text-gray-900 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 48 48"
                      id="gmail"
                    >
                      <path
                        fill="#4285F4"
                        d="M3.27273 42.0088H10.9091V23.4633L0 15.2815V38.736C0 40.5442 1.46455 42.0088 3.27273 42.0088Z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M37.0909 42.0088H44.7273C46.5355 42.0088 48 40.5442 48 38.736V15.2815L37.0909 23.4633V42.0088Z"
                      ></path>
                      <path
                        fill="#FBBC04"
                        d="M37.0909 9.28155V23.4634L48 15.2815V10.9179C48 6.87336 43.3827 4.56336 40.1455 6.99064L37.0909 9.28155Z"
                      ></path>
                      <path
                        fill="#EA4335"
                        fill-rule="evenodd"
                        d="M10.9091 23.4633V9.28149L24 19.0997L37.0909 9.28149V23.4633L24 33.2815L10.9091 23.4633Z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill="#C5221F"
                        d="M0 10.9179V15.2815L10.9091 23.4634V9.28155L7.85455 6.99064C4.61727 4.56336 0 6.87336 0 10.9179Z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 ">
              <img
                className="mx-auto mb-4 w-40 h-40 rounded-full object-cover"
                src={ceo}
                alt="Ranjith Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                <a href="#">RANJITH</a>
              </h3>
              <p>CEO</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/ranjith-kumar-156706171/"
                    target="_blank"
                    className="text-[#39569c] hover:text-gray-900 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="7.025 7.025 497.951 497.95"
                      id="linkedin"
                    >
                      <linearGradient
                        id="a"
                        x1="-974.482"
                        x2="-622.378"
                        y1="1306.773"
                        y2="1658.877"
                        gradientTransform="translate(1054.43 -1226.825)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#2489be"></stop>
                        <stop offset="1" stop-color="#0575b3"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ranjith@ecologicads.in"
                    target="_blank"
                    className="text-[#00acee] hover:text-gray-900 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 48 48"
                      id="gmail"
                    >
                      <path
                        fill="#4285F4"
                        d="M3.27273 42.0088H10.9091V23.4633L0 15.2815V38.736C0 40.5442 1.46455 42.0088 3.27273 42.0088Z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M37.0909 42.0088H44.7273C46.5355 42.0088 48 40.5442 48 38.736V15.2815L37.0909 23.4633V42.0088Z"
                      ></path>
                      <path
                        fill="#FBBC04"
                        d="M37.0909 9.28155V23.4634L48 15.2815V10.9179C48 6.87336 43.3827 4.56336 40.1455 6.99064L37.0909 9.28155Z"
                      ></path>
                      <path
                        fill="#EA4335"
                        fill-rule="evenodd"
                        d="M10.9091 23.4633V9.28149L24 19.0997L37.0909 9.28149V23.4633L24 33.2815L10.9091 23.4633Z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill="#C5221F"
                        d="M0 10.9179V15.2815L10.9091 23.4634V9.28155L7.85455 6.99064C4.61727 4.56336 0 6.87336 0 10.9179Z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 ">
              <img
                className="mx-auto mb-4 w-40 h-40 rounded-full object-cover"
                src={cs}
                alt="Naresh Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                <a href="#">NARESH KUMAR</a>
              </h3>
              <p>Cheif Strategist</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/naresh-kumar-3553231b3"
                    className="text-[#39569c] hover:text-gray-900 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="7.025 7.025 497.951 497.95"
                      id="linkedin"
                    >
                      <linearGradient
                        id="a"
                        x1="-974.482"
                        x2="-622.378"
                        y1="1306.773"
                        y2="1658.877"
                        gradientTransform="translate(1054.43 -1226.825)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#2489be"></stop>
                        <stop offset="1" stop-color="#0575b3"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:naresh@ecologicads.in"
                    target="_blank"
                    className="text-[#00acee] hover:text-gray-900 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 48 48"
                      id="gmail"
                    >
                      <path
                        fill="#4285F4"
                        d="M3.27273 42.0088H10.9091V23.4633L0 15.2815V38.736C0 40.5442 1.46455 42.0088 3.27273 42.0088Z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M37.0909 42.0088H44.7273C46.5355 42.0088 48 40.5442 48 38.736V15.2815L37.0909 23.4633V42.0088Z"
                      ></path>
                      <path
                        fill="#FBBC04"
                        d="M37.0909 9.28155V23.4634L48 15.2815V10.9179C48 6.87336 43.3827 4.56336 40.1455 6.99064L37.0909 9.28155Z"
                      ></path>
                      <path
                        fill="#EA4335"
                        fill-rule="evenodd"
                        d="M10.9091 23.4633V9.28149L24 19.0997L37.0909 9.28149V23.4633L24 33.2815L10.9091 23.4633Z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill="#C5221F"
                        d="M0 10.9179V15.2815L10.9091 23.4634V9.28155L7.85455 6.99064C4.61727 4.56336 0 6.87336 0 10.9179Z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
