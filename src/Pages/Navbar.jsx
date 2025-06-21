import NavLogo from "../assets/Nav-logo.png";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white text-tiny font-normal border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5 py-4 md:py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={NavLogo}
            className="h-[60px] w-[200px]"
            alt="Pentutor Nav-Logo"
          />
        </Link>

        {/* Buttons */}
        <div className="flex gap-2 md:order-2 mb-3 md:mb-0">
          <button className="flex items-center gap-2 p-2 cursor-pointer">
            <ShoppingCart size={20} color="#313D6A" />
          </button>

          <button
            type="button"
            className="cursor-pointer font-semibold bg-[#313D6A] text-white h-10 px-4 py-2 rounded-md text-sm transition duration-300 border border-[#313D6A] hover:bg-white hover:text-[#313D6A] hover:ring hover:ring-[#313D6A]"
          >
            Login
          </button>

          <button
            type="button"
            className="cursor-pointer font-semibold bg-white text-[#313D6A] h-10 px-4 py-2 rounded-md text-sm transition duration-300 border border-[#313D6A] hover:bg-[#313D6A] hover:text-white hover:ring hover:ring-[#313D6A]"
          >
            Register
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#313D6A] rounded-lg md:hidden hover:bg-[#E6E8F0] focus:ring-2 focus:ring-[#313D6A]"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
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

        {/* Nav Links */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${
            isOpen ? "flex mt-4 space-y-2 flex-col" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row whitespace-nowrap p-4 md:p-0 font-normal text-[16px] leading-[24px] rtl:space-x-reverse">
            {[
              { name: "Home", to: "/" },
              { name: "About Us", to: "/about-us" },
              {
                name: "Our Services",
                dropdown: [
                  { name: "Online Acd Session", to: "/online-Acd" },
                  { name: "Online Tutoring Service", to: "/online-tutoring" },
                  { name: "Home Tutoring Service", to: "/home-tutoring" },
                  { name: "Online Individual Group", to: "/individual-group" },
                ],
              },
              {
                name: "Courses",
                dropdown: [
                  { name: "Search Online Course", to: "/courses" },
                  { name: "Learn SEO", to: "/course-detail" },
                ],
              },
              { name: "Our Tutors", to: "/tutors" },
              {
                name: "Job Board",
                dropdown: [
                  { name: "CartEdited", to: "/cart" },
                  { name: "Checkout", to: "/checkout" },
                ],
              },
              { name: "Blog", to: "/blog" },
              { name: "Contact Us", to: "/contact" },
            ].map((item, index) => (
              <li key={index} className="relative group md:static">
                {item.dropdown ? (
                  <>
                    {/* Toggle for mobile */}
                    <div
                      className="flex justify-between items-center py-2 px-3 text-black font-[400] cursor-pointer hover:underline"
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      {item.name}
                      {/* Down arrow for mobile */}
                      <svg
                        className="w-4 h-4 ml-2 md:hidden"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {/* Dropdown list */}
                    <ul
                      className={`${
                        openDropdown === item.name ? "block" : "hidden"
                      } md:absolute md:group-hover:block z-50 bg-white shadow-lg rounded-md min-w-[200px]`}
                    >
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <li key={dropIndex}>
                          <Link
                            to={dropItem.to}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className="block py-2 px-3 hover:underline text-black font-[400]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
