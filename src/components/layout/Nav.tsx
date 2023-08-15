import { useEffect, useState } from "react";
import { BsTruck } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-scroll";
import { LogoSide } from "../../images";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="z-40 bg-white w-full flex flex-col flex-grow shadow-sm">
      <div
        className={` ${
          isScrolled ? "hidden" : "flex"
        } flex-wrap gap-3 justify-center md:justify-between bg-[#EDB842] py-2 px-10`}
      >
        <div className="text-[#666666]">Delivery in 10 minutes</div>
        <div className="flex space-x-3">
          <div className="flex items-center space-x-1">
            <span className="text-white">
              <MdLocationPin />
            </span>
            <span className="text-[#666666]">
              Deliver to <span className="font-[700]">411017</span>
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-white">
              <BsTruck />
            </span>
            <span className="text-[#666666]">Track your order</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-white">
              <GoVerified />
            </span>
            <span className="text-[#666666]">All Offers</span>
          </div>
        </div>
      </div>
      <div
        className={`${
          isScrolled && "fixed py-6"
        } flex flex-wrap justify-evenly items-center playfair-display bg-white w-full z-20`}
      >
        <img className="object-cover w-fit" src={LogoSide} alt="" />
        <div className="flex gap-2 md:gap-5">
          <div className="hover:border-b-2 hover:text-lg">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </div>
          <div className="hover:border-b-2 hover:text-lg">
            <Link to="about" smooth={true} duration={1000}>
              About
            </Link>
          </div>
          <div className="hover:border-b-2 hover:text-lg">
            <Link to="contact" smooth={true} duration={1000}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
