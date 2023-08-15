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
          Lorem ipsum dolor sit amet consectetur. Nulla massa et id euismod at
          fermentum ornare. Sed habitant odio odio interdum semper. Id nulla
          amet facilisi imperdiet condimentum. Feugiat et eu in vestibulum vel
          porttitor id tellus rhoncus. Morbi vel vitae habitant elit eu. Egestas
          dui sed mauris mauris. Netus at orci mi ut arcu. Aliquam gravida diam
          sa. Habitasse purus turpis tortor vitae sed est felis. Est tortor
          adipiscing.
        </div>
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
