const JoinUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-teal-700">JOIN US</h2>
          <h3 className="text-xl font-semibold text-gray-800">
            Partner with an experienced alternative investment Team
          </h3>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>Join us, at no cost to you</strong>
              <br />
              Our advisor-centric team of 20+ professionals supports you through
              every step of your journey. We service 100+ independent financial
              advisory firms who represent over £4 billion in assets
              collectively. We invest alongside our clients, creating a direct
              alignment of interest.
            </p>

            <p>
              <strong>Build Intelligent Portfolios for Your Investments</strong>
              <br />
              Our cloud-based proprietary quantitative analytics, portfolio
              optimization technology, and qualitative research are designed to
              help you build intelligent, institutional-quality private equity
              and hedge fund portfolios.
            </p>

            <p>
              <strong>Investing</strong>
              <br />
              We use serious and highly analyzed strategy and results to pursue
              steady, reliable returns. Integrated tightly with your financial
              planning specialists is our extremely high powered, intellectually
              voracious investment operation. Our team works tirelessly to
              develop sophisticated strategies on your behalf. Lucky for you,
              you won’t see all of this first-hand unless you're interested in
              it. Instead, your over-arching investment experience with us
              should feel calm, secure and successful. Here's what else you can
              expect: A long-term, value-orientated approach, Risk management,
              not risk minimisation, Aggregated investing power, Heavy
              analytical firepower.
            </p>

            <p>
              <strong>Wealth Management</strong>
              <br />
              Imagine having the freedom to focus on the things that give you
              energy. Wealth advice with a disciplined, evidence-based approach
              is hard to come by. Fortunately, you've found your way here. In
              just a few minutes, discover how to create a more secure future.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://alphatrustfx.com/wp-content/uploads/2023/05/pexels-edmond-dantes-4345104.jpg"
            alt="Corporate team discussing investments"
            className="rounded-lg shadow-lg object-cover w-full h-[400px] mb-6"
          />
          <img
            src="/herobg1.jpg"
            alt="Corporate team discussing investments"
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
