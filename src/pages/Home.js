import CarDetails from "../component/carDetail";
import CardSewa from "../component/cardSewa";
import Faq from "../component/faq";
import Footer from "../component/footer";
import HeroBanner from "../component/heroBanner";
import NavbarCar from "../component/navbar";
import OurService from "../component/services";
import Testimonial from "../component/testimoni";
import WhyUs from "../component/whyUs";

function Home() {
  return (
    <>
      <NavbarCar />
      <HeroBanner />
      <OurService />
      <WhyUs />
      <Testimonial />
      <CardSewa />
      <Faq />
      <Footer />
    </>
  );
}
export default Home;
