import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin, BsTelephone, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { LogoSide } from "../../images";

const Footer = () => {
  return (
    <div
      className="bg-[#F8F9FA] text-[#77808B] font-[400] p-6 md:p-12 flex flex-col gap-6"
      id="contact"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col space-y-3">
          <img className="object-cover w-fit -m-3" src={LogoSide} alt="" />
          <div className="">
            Sondya is an E-commerce platform designed and developed for buyers
            and sellers located in Nigeria, Africa.
          </div>
          <div className="text-[#283646]">Copyright Sondya Corp.</div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-[#EDB842] font-[700]">Service</div>
          <div className="">Whole-sell</div>
          <div className="">Retail</div>
          <div className="">EDI</div>
          <div className="">Supply Chain</div>
          <div className="">Development</div>
          <div className="">Internet Marketing</div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-[#EDB842] font-[700] font-sans">Company</div>
          <div className="">Service</div>
          <div className="">Features</div>
          <div className="">Our Team</div>
          <div className="">Portfolio</div>
          <div className="">Blog</div>
          <div className="">Contact Us</div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-[#EDB842] font-[700]">Join our Newsletter</div>
          <div className="">Your Email</div>
          <div className="flex space-x-2">
            <input
              className="w-1/2 border border-[#76AEFF] rounded-md p-3"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="bg-[#EDB842] p-2 rounded-md text-white font-[700]">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-1 text-white">
            <button className="bg-[#EDB842] p-2 rounded-full">
              <BsWhatsapp />
            </button>
            <button className="bg-[#EDB842] p-2 rounded-full">
              <BsTwitter />
            </button>
            <button className="bg-[#EDB842] p-2 rounded-full">
              <BsLinkedin />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap grid-cols-none justify-between py-6 border-t border-[#76AEFF] gap-3">
        <div className="text-[#283646]">Copyright Sondya Corp.</div>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center space-x-1">
            <span className="text-[#EDB842]">
              <MdLocationPin />
            </span>
            <span>8819 Ohio St. Lagos State, CA 90280</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-[#EDB842]">
              <AiOutlineMail />
            </span>
            <span>sondya@hello.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-[#EDB842]">
              <BsTelephone />
            </span>
            <span>+234 123-456-789</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
