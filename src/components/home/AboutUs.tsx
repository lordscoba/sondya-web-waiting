import { Link } from "react-router-dom";
import { People } from "../../images";

const AboutUs = () => {
  return (
    <div
      className="flex flex-col md:flex-row py-10 px-5 md:p-16 items-center bg-black text-white gap-8"
      id="about"
    >
      <div className="flex flex-col basis-1/2 gap-3">
        <div className="text-[20px] font-[600]">About Us</div>
        <div className="text-[44px] font-[800] playfair-display">
          <span className="text-[#EDB842]">Sondya</span>, a Family That Keeps On
          Growing
        </div>
        <div className="text-[18px] font-[300]">
          Sondya, is a global social networking and e-commerce platform designed
          for buying and selling products. It connects users from around the
          world, allowing them to discover buy and sell products and services
          and also interact with each other.
        </div>
        <Link
          className="bg-[#EDB842] px-4 py-2 rounded-md w-fit"
          to={"/description"}
        >
          See more
        </Link>
      </div>
      <div className="basis-1/2 p-3">
        <img
          className="rounded-md h-full w-full object-cover hover:scale-105 hover:skew-y-1"
          src={People}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
