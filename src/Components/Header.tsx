import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-teal-500 text-white sticky top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          Fundnest
        </NavLink>
        <ul className="hidden md:flex space-x-6 mx-auto">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:border-b-2 hover:border-white pb-1"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:border-b-2 hover:border-white pb-1"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:border-b-2 hover:border-white pb-1"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:border-b-2 hover:border-white pb-1"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:flex space-x-3">
          <button className="bg-transparent border border-white px-6 py-2 rounded hover:bg-white hover:text-teal-500 cursor-pointer">
            Login
          </button>
          <button className="bg-white text-teal-500 px-6 py-2 rounded cursor-pointer">
            Sign Up
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "absolute left-0 w-full z-40 bg-teal-500 px-4 h-[320px]"
            : "hidden"
        } md:hidden pt-6`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <NavLink
              to="/home"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:border-b-2 hover:border-white pb-1"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:border-b-2 hover:border-white pb-1"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:border-b-2 hover:border-white pb-1"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:border-b-2 hover:border-white pb-1"
              }
            >
              Contact
            </NavLink>
          </li>

          <div className="flex flex-col space-y-2 mt-4">
            <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-teal-500 cursor-pointer">
              Login
            </button>
            <button className="bg-white text-teal-500 px-4 py-2 rounded cursor-pointer">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
