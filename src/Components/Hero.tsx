import { useEffect, useState } from "react";

const subtitles = [
  "Comprehensive financial advice and investment services that are tailored to meet your individual needs.",
  "Your trusted partner in navigating the world of finance.",
  "Invest in your future today.",
  "Diversify your portfolio with ease.",
  "Grow wealth, confidently.",
  "Smart investments. Real returns.",
];

const Hero = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full h-[700px] bg-cover bg-center flex flex-col items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: "url('/herobg.jpg')",
      }}
    >
      <div className="bg-black opacity-70 p-8 rounded-lg text-center max-w-2xl text-white mx-4">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-white">
          Welcome to Fundnest
        </h1>
        <p className="text-lg md:text-xl lg:text-xl font-semibold transition-opacity duration-500">
          {subtitles[subtitleIndex]}
        </p>
      </div>
      <button className="mt-6 px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-700 transition duration-300 cursor-pointer">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
