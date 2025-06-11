import React, { useState } from "react";
import {
  Youtube,
  Instagram,
  Linkedin,
  Phone,
  Pin, 
  Globe, 
} from "lucide-react";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please fill in both name and email fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    alert("Form submitted successfully", { name, email });

    setName("");
    setEmail("");
  };

  const socialLinks = [
    { name: "Youtube", url: "https://www.youtube.com/", Icon: Youtube },
    { name: "Instagram", url: "https://www.instagram.com/", Icon: Instagram },
    { name: "Linkedin", url: "https://www.linkedin.com/", Icon: Linkedin },
    { name: "Skype", url: "https://www.skype.com/", Icon: Phone },
    { name: "Pinterest", url: "https://www.pinterest.com/", Icon: FaPinterest  },
    { name: "Reddit", url: "https://www.reddit.com/", Icon: Globe },
  ];

  return (
    <footer className="bg-[#404040] text-white">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap justify-between md:text-left order-first gap-x-10">
          {/* Columns 1 & 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Column 1 */}
            <div className="px-4">
              <h2 className="title-font font-[800] text-yellow-400 tracking-wide text-2xl mb-3 underline whitespace-nowrap">
                Follow US
              </h2>
              <nav className="list-none text-xl mb-10">
                {socialLinks.map(({ name, url, Icon }, index) => (
                  <li className="my-2 flex items-center gap-2" key={index}>
                    <Icon className="w-5 h-5 text-white" />
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 hover:underline"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Column 2 */}
            <div className="px-4">
              <h2 className="title-font font-[800] text-yellow-400 tracking-widest text-2xl mb-3 underline">
                Quick Links
              </h2>
              <nav className="list-none text-xl mb-10 space-y-2">
                {["Home", "FAQs", "Contact Us"].map((item, index) => (
                  <li key={index}>
                    <a className="text-white hover:text-gray-300 hover:underline cursor-pointer whitespace-nowrap">
                      {item}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          </div>

          {/* Column 3 - subscribe */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mt-10 md:mt-0">
            <h2 className="title-font font-[800] text-yellow-400 tracking-widest text-2xl mb-3 underline">
              Subscribe To Our Newsletter
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-2">
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-gray-300 bg-gray-100 text-black outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2 rounded border ${
                    emailError ? "border-red-500" : "border-gray-300"
                  } bg-gray-100 text-black outline-none focus:ring-2 ${
                    emailError ? "focus:ring-red-500" : "focus:ring-indigo-500"
                  }`}
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              <div className="mb-4 text-center">
                <button
                  type="submit"
                  className="cursor-pointer bg-yellow-500 text-white rounded px-6 py-2 hover:bg-yellow-400 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-xl py-6">
        Copyright © 2020 | Pen Tutor
      </div>
    </footer>
  );
};

export default Footer;
