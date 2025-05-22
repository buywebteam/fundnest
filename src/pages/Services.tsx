import {
  FaHome,
  FaBitcoin,
  FaChartLine,
  FaMoneyBillWave,
  FaChartBar,
  FaCoins,
} from "react-icons/fa";

const services = [
  {
    title: "Real Estate",
    description:
      "Diversify your portfolio with real estate investments that offer stable returns and long-term value.",
    icon: <FaHome className="text-4xl text-teal-600" />,
  },
  {
    title: "Gold",
    description:
      "Invest in one of the world's most trusted stores of value to hedge against inflation and market volatility.",
    icon: <FaCoins className="text-4xl text-yellow-600" />,
  },
  {
    title: "Cryptocurrency",
    description:
      "Explore decentralized assets like Bitcoin and Ethereum, supported by our expert-driven strategies.",
    icon: <FaBitcoin className="text-4xl text-orange-500" />,
  },

  {
    title: "Indices",
    description:
      "Gain exposure to major market indices and broaden your investment with passive income strategies.",
    icon: <FaChartLine className="text-4xl text-indigo-600" />,
  },
  {
    title: "Forex",
    description:
      "Access global currency markets with advanced trading tools and professional-grade insights.",
    icon: <FaMoneyBillWave className="text-4xl text-green-600" />,
  },
  {
    title: "Stocks & ETFs",
    description:
      "Invest in a wide range of publicly traded companies and ETFs with the support of Fundnest analytics.",
    icon: <FaChartBar className="text-4xl text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-12">
          Our Services
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md hover:shadow-xl transition p-8 rounded-xl text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Why Choose Fundnest?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Fundnest, we believe in providing not just investment
            opportunities but building long-term financial security for our
            clients. Our diversified services are carefully designed to meet the
            needs of both new and experienced investors. Whether you're planning
            your retirement, exploring cryptocurrency, or diversifying into real
            estate, Fundnest is your trusted partner in smart investing. We
            bring expert knowledge, cutting-edge tools, and a transparent
            approach to help you reach your financial goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
