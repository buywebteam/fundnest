import { FaUserPlus, FaClipboardList, FaMoneyCheckAlt } from "react-icons/fa";

const cards = [
  {
    icon: <FaUserPlus size={30} className="text-teal-600" />,
    title: "Become a member",
    description: "Become a member of Fundnest by creating a free account.",
  },
  {
    icon: <FaClipboardList size={30} className="text-teal-600" />,
    title: "Choose your Plan",
    description:
      "Select any of our unique financial earning plans that best works for you.",
  },
  {
    icon: <FaMoneyCheckAlt size={30} className="text-teal-600" />,
    title: "Earn Passively",
    description:
      "Earn passively and get paid immediately you request for a withdrawal.",
  },
];

const CardsSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {cards.map(({ icon, title, description }) => (
          <div
            key={title}
            className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-teal-50 rounded-full ">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
