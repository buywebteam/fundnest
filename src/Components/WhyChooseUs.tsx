import {
  FaTools,
  FaProjectDiagram,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";

const whyChooseUsData = [
  {
    title: "Portfolio Management Tools",
    description:
      "Benefit from our proprietary portfolio management tools that include alternative investment analytics, portfolio optimization technology and rebalancing software designed to help you service your portfolios and grow your investment.",
    icon: <FaTools size={36} className="text-teal-600" />,
  },
  {
    title: "POT (Portfolio Optimization Technology)",
    description:
      "Have a diversified investment funds portfolio proposals using our proprietary portfolio optimization tools. Portfolios may be customized to meet your desired unique investment objectives, allocate to specific sectors or strategies, and/or complement existing investments.",
    icon: <FaProjectDiagram size={36} className="text-teal-600" />,
  },
  {
    title: "PCT (Portfolio Construct Technology)",
    description:
      "Our proprietary automated software technology allows you to select from a diverse list of rigorously-vetted institutional investment fund exposures across various strategies, add them to your cart, and within seconds generate a web-based portfolio investment plan for your account earnings.",
    icon: <FaChartLine size={36} className="text-teal-600" />,
  },
  {
    title: "QIA (Quantitative Investment Analytics)",
    description:
      "Client-facing deliverables: QIA helps investors understand the investments. Take a deep dive using our proprietary analytics specifically designed for alternative investing. We also deliver top-quality client-facing materials such as interactive proposals, manager/fund profiles, industry news, account statements, audits, and consolidated K-1s.",
    icon: <FaFileAlt size={36} className="text-teal-600" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section>
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-12 text-center">
          WHY CHOOSE US
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsData.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
