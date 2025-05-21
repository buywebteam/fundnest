const companies = [
  {
    name: "Forbes",
    logo: "https://alphatrustfx.com/wp-content/uploads/2023/05/Forbes_logo_black-1024x267.png",
  },
  {
    name: "Bloomberg",
    logo: "https://alphatrustfx.com/wp-content/uploads/2022/07/in-wave-media-3-1.svg",
  },
  {
    name: "MarketWatch",
    logo: "https://alphatrustfx.com/wp-content/uploads/2022/07/in-wave-media-5-1.svg",
  },
  {
    name: "CNBC",
    logo: "https://alphatrustfx.com/wp-content/uploads/2022/07/in-wave-media-1-1.svg",
  },
  {
    name: "Reuters",
    logo: "https://alphatrustfx.com/wp-content/uploads/2022/07/in-wave-media-4-1.svg",
  },
];

const FeaturedOn = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">
          Trusted & Featured On
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex justify-center items-center"
            >
              <img src={company.logo} alt={company.name} className="h-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
