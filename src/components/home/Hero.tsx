import {
  AppSample,
  DownloadAndroid,
  DownloadApple,
  Vector1,
  Vector2,
  Vector3,
  WavyBackground,
} from "../../images";

const Hero = () => {
  return (
    <div
      className=" flex flex-col-reverse md:flex-row p-5 items-center gap-5 pt-24 overflow-y-hidden"
      id="home"
    >
      <div
        className="relative bg-no-repeat bg-cover bg-center flex flex-col basis-1/2 gap-3 animate__animated animate__backInUp animate__slower"
        style={{ backgroundImage: `url(${WavyBackground})` }}
      >
        <div className="text-[64px] font-[700] playfair-display">
          For Buyers, <br />
          For Sellers
        </div>
        <div className="text-[24px] font-[400] font-sans">
          Whether you're a vendor, or any other type of buyer , in Sondya you
          can find a place to connect with your targeted needs, whole-sell,
          retailing, buy, sell and get your business to needed heights using our
          platform features to build real customers and exciting partnerships.
        </div>
        <div className="text-[24px] font-[600]">Available soon on</div>
        <img
          className="absolute h-10 bottom-16 right-20 md:right-40 lg:right-60"
          src={Vector3}
          alt=""
        />
        <div className="flex gap-3">
          <button>
            <img className="w-[180px]" src={DownloadApple} alt="" />
          </button>
          <button>
            <img className="w-[180px]" src={DownloadAndroid} alt="" />
          </button>
        </div>
      </div>
      <div className="relative basis-1/2 animate-bounce1">
        <img
          className="absolute h-5 bottom-28 left-0 lg:bottom-48"
          src={Vector1}
          alt=""
        />
        <img
          className="absolute w-1/2 md:w-1/3 md:right-10 right-4 -top-24 md:-top-10 z-50"
          src={Vector2}
          alt=""
        />
        <img className="" src={AppSample} alt="" />
      </div>
    </div>
  );
};

export default Hero;
