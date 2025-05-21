import FeaturedOn from "../components/FeaturedOn";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JoinUs from "../components/JoinUs";
import StatSection from "../components/StatSection";
import SwitchToFundnest from "../components/SwitchToFundnest";
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
    </div>
  );
}

export default Home;
