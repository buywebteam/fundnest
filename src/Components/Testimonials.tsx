const testimonials = [
  {
    name: "Vivian T. Vachon",
    text: "Fundnest runs a quick and reliable system. It feels great to know that I can always trust their support system to come through for me. Their response speed is prompt and the delivery precise to the last detail.",
  },
  {
    name: "Jack Thompson",
    text: "I was an engineer in Washington DC when an account manager brought this opportunity to me. I casually invested $500, but my story today is on a premium plan.",
  },
  {
    name: "Robert Prickett",
    text: "I have only been a member for a few months and I’ve already earned a decent amount of money. Finally, a real and honest company that does what it says. Thank you so much for this great opportunity!",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-teal-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-6">TESTIMONIAL</h2>
        <p className="text-lg text-gray-700 mb-12">
          Clients come to us for a number of reasons
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map(({ name, text }, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-600 text-sm mb-4 italic">"{text}"</p>
              <h4 className="text-teal-700 font-semibold">{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
