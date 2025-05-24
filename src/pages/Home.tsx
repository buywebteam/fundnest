import FeaturedOn from "../components/FeaturedOn";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import HomeCard2 from "../components/HomeCard2";
import JoinUs from "../components/JoinUs";
import StatSection from "../components/StatSection";
import SwitchToFundnest from "../components/SwitchToFundnest";
import TestimonialSection from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedOn />
      <HomeCard />
      <JoinUs />
      <WhyChooseUs />
      <StatSection />
      <SwitchToFundnest />
      <TestimonialSection />
      <HomeCard2 />
    </div>
  );
}

export default Home;
