import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-32 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-teal-700 mb-6">
          About Fundnest
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          At <span className="font-semibold">Fundnest</span>, we are driven by
          one mission — to help individuals and financial advisors access
          alternative investment opportunities with confidence, transparency,
          and technology.
        </p>

        <h2 className="text-2xl font-bold text-teal-600 mb-4">Who We Are</h2>
        <p className="mb-6 text-base leading-relaxed">
          Fundnest is a forward-thinking financial technology company dedicated
          to reshaping the investment landscape. With a team of 20+ experienced
          professionals and a commitment to integrity and innovation, we partner
          with 100+ financial advisory firms, collectively managing over £4
          billion in assets.
        </p>

        <h2 className="text-2xl font-bold text-teal-600 mb-4">What We Do</h2>
        <p className="mb-6 text-base leading-relaxed">
          We offer a cloud-based platform that delivers institutional-quality
          investment tools and portfolio management features. Our proprietary
          technologies like{" "}
          <strong>POT (Portfolio Optimization Technology)</strong>,
          <strong> PCT (Portfolio Construct Technology)</strong>, and{" "}
          <strong>QIA (Quantitative Investment Analytics)</strong> help users
          create intelligent portfolios, diversify investments, and track
          performance with precision.
        </p>

        <h2 className="text-2xl font-bold text-teal-600 mb-4">Why Fundnest?</h2>
        <ul className="list-disc list-inside text-base leading-relaxed mb-8">
          <li>
            Access to global markets including Forex, ETFs, Crypto, Real Estate,
            and more
          </li>
          <li>Top-tier educational resources and client-centric support</li>
          <li>Proven investment strategies and technology-driven solutions</li>
          <li>
            Fast withdrawals, transparent earnings, and real-time analytics
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-teal-600 mb-4">Our Vision</h2>
        <p className="mb-6 text-base leading-relaxed">
          To democratize investment by making institutional-grade tools and
          strategies available to everyone — from individuals to large advisory
          firms — while maintaining transparency, integrity, and trust.
        </p>

        <h2 className="text-2xl font-bold text-teal-600 mb-4">Join Us</h2>
        <p className="mb-10 text-base leading-relaxed">
          Whether you're an investor, a financial advisor, or simply looking to
          grow your wealth passively — Fundnest is your trusted partner for
          building a secure financial future. Join us and experience a smarter
          way to invest.
        </p>

        <div className="text-center">
          <Link
            to="/signup"
            className="inline-block bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-800 transition"
          >
            Create Your Free Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
