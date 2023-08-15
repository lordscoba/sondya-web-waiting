import AboutUs from "../components/home/AboutUs";
import CountDown from "../components/home/CountDown";
import Hero from "../components/home/Hero";
import { Footer, Nav } from "../components/layout";

const Home = () => {
  return (
    <div className="">
      <Nav />
      <Hero />
      <AboutUs />
      <CountDown />
      <Footer />
    </div>
  );
};

export default Home;
