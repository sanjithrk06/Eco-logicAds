import { Link } from "react-scroll";
import logo from "../assets/logo.avif";
import { NavLink } from "react-router-dom";

const MenuLinks = [
  { id: 1, name: "About", link: "about" },
  { id: 2, name: "Products", link: "our-products" },
  { id: 3, name: "Blogs", link: "#" },
  { id: 4, name: "Inquiry", link: "contact" },
];

const Header = () => {
  return (
    <div className="bg-white  duration-200 sticky top-0 z-40">
      <div className="py-4 mx-10">
        <div className="container ">
          <div className="flex items-center justify-between">
            <NavLink
              to={"/"}
              className=" text-[#146924] font-semibold tracking-widest w-1/3 text-xl sm:text-2xl"
            >
              <img
                src={logo}
                className=" inline-flex w-[45px] items-center"
                alt="logo"
              />
              <span className=" mt-2 font-logo"> Eco-logicAds</span>
            </NavLink>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    {/* <Link
                      to={data.link}
                      smooth={true}
                      duration={1000}
                      offset={-70}
                      className="inline-block px-4 font-semibold text-black hover:text-black uppercase duration-200 cursor-pointer"
                    >
                      {data.name}
                    </Link> */}
                    <NavLink
                      to={data.link}
                      duration={1000}
                      offset={-70}
                      className="inline-block px-4 font-semibold text-black hover:text-black uppercase duration-200 cursor-pointer"
                    >
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
