import React, { useState } from "react";
import NavLogo from "../assets/Nav-logo.png";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white font-inter text-tiny font-normal border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={NavLogo}
            className="h-[60px] w-[200px]"
            alt="Pentutor Nav-Logo"
          />
        </a>

        <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="flex items-center gap-2 p-2 cursor-pointer">
            <ShoppingCart size={20} color="#313D6A" />
          </button>

          <button
            type="button"
            className="cursor-pointer font-semibold bg-[#313D6A] text-white h-10 px-4 py-2 rounded-md inline-flex items-center justify-center text-sm transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#313D6A] hover:bg-white hover:text-[#313D6A] hover:ring hover:ring-[#313D6A]"
          >
            Login
          </button>

          <button
            type="button"
            className="cursor-pointer font-semibold bg-white text-[#313D6A] h-10 px-4 py-2 rounded-md inline-flex items-center justify-center text-sm transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#313D6A] hover:bg-[#313D6A] hover:text-white hover:ring hover:ring-[#313D6A]"
          >
            Register
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#313D6A] rounded-lg md:hidden hover:bg-[#E6E8F0] focus:outline-none focus:ring-2 focus:ring-[#313D6A]"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col  font-normal text-[11px] leading-[16px] p-4 md:p-0 mt-4 md:space-x-5 md:flex-row md:mt-0 md:border-0 rtl:space-x-reverse">
            {/* Menu items */}
            <li>
              <a
                href="#"
                className="block py-2 hover:underline px-3 md:p-0 text-[#404040] text-[16px] font-[400]"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:underline md:p-0 text-black text-[16px] font-[400]"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 hover:underline text-black text-[16px] font-[400]"
              >
                Our Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 hover:underline text-black text-[16px] font-[400]"
              >
                Courses
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-black hover:underline text-[16px] font-[400]"
              >
                Our Tutors
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 hover:underline text-black text-[16px] font-[400]"
              >
                Job Board
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 hover:underline text-black text-[16px] font-[400]"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 hover:underline text-black text-[16px] font-[400]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
