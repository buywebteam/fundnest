import CountUp from "react-countup";

const stats = [
  { value: 270000, suffix: "+", label: "Daily trades" },
  { value: 450000, suffix: "+", label: "Clients" },
  { value: 2, suffix: " billion+", label: "USD daily trade volume" },
  { value: 5, suffix: " billion+", label: "USD assets under management" },
];

const StatsSection = () => {
  return (
    <section className="py-30 bg-teal-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 text-center">
          {stats.map(({ value, suffix, label }, idx) => (
            <div key={idx}>
              <p className="text-4xl font-extrabold text-teal-700">
                <CountUp end={value} duration={2.5} separator="," />
                {suffix}
              </p>
              <p className="mt-2 text-lg font-medium text-teal-900">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
