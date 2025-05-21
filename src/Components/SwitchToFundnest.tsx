import {
  FaGlobe,
  FaShieldAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    title: "2100+ Instruments",
    description:
      "Wide range of global markets, including Forex, Indices, Commodities, ETFs and more.",
    icon: <FaGlobe className="text-teal-600 w-6 h-6" />,
  },
  {
    title: "Safe & Secure",
    description:
      "Fundnest is regulated by the world's biggest supervision authorities, including the Financial Conduct Authority.",
    icon: <FaShieldAlt className="text-teal-600 w-6 h-6" />,
  },
  {
    title: "Comprehensive Education",
    description:
      "Make use of our extensive video library and get to know more about trading.",
    icon: <FaGraduationCap className="text-teal-600 w-6 h-6" />,
  },
  {
    title: "Innovative Platform",
    description:
      "We're constantly improving our trading platform to make it the best on the market.",
    icon: <FaLaptopCode className="text-teal-600 w-6 h-6" />,
  },
  {
    title: "450,000+ Customers",
    description:
      "With years of activity in the financial markets, Fundnest has gained thousands of customers.",
    icon: <FaUsers className="text-teal-600 w-6 h-6" />,
  },
  {
    title: "Fast & Qualified Support",
    description:
      "Our multilingual customer support team is ready to help you - 24h hours a day.",
    icon: <FaHeadset className="text-teal-600 w-6 h-6" />,
  },
];

const SwitchToFundnestSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-4">
          Switch to Fundnest
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          At Fundnest we work hard to enhance your trading experience. As a
          global, 5-star rated broker, our client’s satisfaction is at the
          center of our focus.
        </p>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {features.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className="bg-teal-50 rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-inner">
                  {icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-teal-800">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SwitchToFundnestSection;
