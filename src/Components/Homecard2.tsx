import { Link } from "react-router-dom";
import HomeCard from "./HomeCard";

function HomeCard2() {
  return (
    <section className="py-16">
      <div className="">
        <h1 className="text-center text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
          Invest with confidence
        </h1>
        <HomeCard />
      </div>
      <div className="max-w-7xl mx-auto px-4  rounded-xl bg-teal-900 h-[200px] flex lg:flex-row flex-col justify-around items-center text-white text-center">
        <p className="text-lg">
          Connect with over 450,000 investors in the world’s leading investment
          company
        </p>
        <Link to="/signup">
          <button className="px-8 py-3 bg-teal-500 text-white text-base rounded-lg cursor-pointer">
            Create an Account
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HomeCard2;
