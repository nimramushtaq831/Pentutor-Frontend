import React, { useState } from "react";
import NavLogo from "../assets/Nav-logo.png";
import { HomeIcon, PhoneIcon, ShoppingCart } from "lucide-react";
import {
  ChatBubbleLeftIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import {
  FaPaperclip,
  FaRegFileAlt,
  FaWindowMinimize,
  FaWindowRestore,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineDraw, MdVideocam } from "react-icons/md";
import { FaRegWindowRestore } from "react-icons/fa6";
import { IoClose, IoCloseCircle } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ZoommoduleNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-[#313D6A] font-inter text-tiny font-normal border-gray-200 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <a
            href="#"
            className="text-center text-xl font-bold text-white items-center  rtl:space-x-reverse"
          >
            <h1>PEN</h1>
            <h1>TUTOR</h1>
          </a>

          <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className="hidden md:flex gap-2 cursor-pointer">
              <FiMinus color="white" size={20} />
            </button>

            <button className="hidden md:flex gap-2 cursor-pointer">
              <FaRegWindowRestore size={20} color="white" />
            </button>

            <button className="hidden md:flex gap-2 cursor-pointer">
              <IoMdClose size={20} color="white" />
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#E6E8F0] focus:outline-none focus:ring-2 focus:ring-[#E6E8F0]"
              aria-controls="navbar-cta"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
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
            <ul className="flex flex-col font-normal text-[11px] leading-[16px] p-4 md:p-0 mt-4 md:space-x-5 md:flex-row md:mt-0 md:border-0 rtl:space-x-reverse">
              {/* Menu items */}
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 py-2 px-3 text-white/80 text-[16px] font-light transition duration-300 hover:bg-white hover:text-black rounded"
                  aria-current="page"
                >
                  <HomeIcon className="h-6 w-6" />
                  <span>Home</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 py-2 px-3 text-white/80 text-[16px] font-light transition duration-300 hover:bg-white hover:text-black rounded"
                  aria-current="page"
                >
                  <ChatBubbleLeftIcon className="h-6 w-6" />
                  <span>Team Chat</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 py-2 px-3 text-white/80 text-[16px] font-light transition duration-300 hover:bg-white hover:text-black rounded"
                  aria-current="page"
                >
                  <PhoneIcon className="h-6 w-6" />
                  <span>Phone</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 py-2 px-3 text-white/80 text-[16px] font-light transition duration-300 hover:bg-white hover:text-black rounded"
                  aria-current="page"
                >
                  <FaRegFileAlt className="h-6 w-6" />
                  <span>Docs</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 py-2 px-3 text-white/80 text-[16px] font-light transition duration-300 hover:bg-white hover:text-black rounded"
                  aria-current="page"
                >
                  <MdOutlineDraw className="h-6 w-6" />
                  <span>Whiteboards</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 py-2 px-3 text-white/80 text-[16px] font-[400] transition duration-300 hover:bg-white hover:text-black rounded"
                  aria-current="page"
                >
                  <FaYoutube className="h-6 w-6" />
                  <span>Clips</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 py-2 px-3 text-white/80 text-[16px] font-[400] rounded"
                  aria-current="page"
                >
                  <HiOutlineDotsHorizontal className="h-6 w-6" />
                  <span>More</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ZoommoduleNav;
