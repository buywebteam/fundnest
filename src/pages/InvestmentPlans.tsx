import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic Plan",
    minDeposit: "$100",
    maxDeposit: "$1,999",
    roi: "3% Daily",
    duration: "24 Hours",
    bg: "bg-teal-100",
  },
  {
    name: "Business Plan",
    minDeposit: "$2,000",
    maxDeposit: "$4,999",
    roi: "5% Daily",
    duration: "2 Days",
    bg: "bg-blue-100",
  },
  {
    name: "Executive Plan",
    minDeposit: "$5,000",
    maxDeposit: "$7,999",
    roi: "10% Daily",
    duration: "4 Days",
    bg: "bg-purple-100",
  },
  {
    name: "VIP Plan",
    minDeposit: "$8,000",
    maxDeposit: "$100,000",
    roi: "20% Daily",
    duration: "7 Days",
    bg: "bg-yellow-100",
  },
];

const InvestmentPlans = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-700 mb-12">
          Our Investment Plans
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bg} rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition`}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h2>
              <ul className="text-gray-700 text-left space-y-2 text-sm sm:text-base">
                <li>
                  <strong>Min. Deposit:</strong> {plan.minDeposit}
                </li>
                <li>
                  <strong>Max. Deposit:</strong> {plan.maxDeposit}
                </li>
                <li>
                  <strong>ROI:</strong> {plan.roi}
                </li>
                <li>
                  <strong>Duration:</strong> {plan.duration}
                </li>
              </ul>
              <Link to="/signup">
                <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-800 transition cursor-pointer">
                  Invest Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
