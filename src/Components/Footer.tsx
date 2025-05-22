import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/plans" className="hover:underline">
                Investment Plans
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:underline">
                Real Estate
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Gold
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Cryptocurrency
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:underline">
                Indices
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Forex
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Stocks & ETF's
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-lg font-bold mb-4">LEGAL</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* ACCOUNT */}
        <div>
          <h3 className="text-lg font-bold mb-4">ACCOUNT</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:underline">
                Create an Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Fundnest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
