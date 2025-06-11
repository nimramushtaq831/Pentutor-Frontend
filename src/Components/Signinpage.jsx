import { IoIosArrowBack } from "react-icons/io";
import ZoommoduleNav from "../Pages/ZoommoduleNav";
import NavLogo from "../assets/Nav-logo.png";
import { FaApple, FaFacebook, FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Signinpage = () => {
  return (
    <>
      {/* Signin page nav  */}
      <ZoommoduleNav />
      {/* Navbar Complete */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
        {/* Logo Section */}
        <div className="py-8 flex flex-col items-center space-y-3">
          <a href="#" className="flex flex-col items-center space-y-1">
            <img
              src={NavLogo}
              className="h-[60px] w-[200px] object-contain"
              alt="Pentutor Nav-Logo"
            />
            <h1 className="text-gray-400 text-sm">us04web.pentutor.us</h1>
          </a>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-6 mb-10">
          {/* Back Button */}
          <div className="flex items-center text-gray-500 space-x-1 cursor-pointer hover:text-gray-700">
            <IoIosArrowBack />
            <p>Back</p>
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Password Input with Forgot */}
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 pr-24 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="absolute top-1/2 right-4 -translate-y-1/2 text-sm text-blue-600 hover:underline">
              Forgot?
            </button>
          </div>

          {/* Sign In Button */}
          <div>
            <button className="w-full bg-[#313D6A] text-white py-3 rounded-xl hover:bg-[#1e2b57] transition duration-200">
              Sign In
            </button>
          </div>

          {/* Keep me signed in */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="keep-signed-in" className="w-4 h-4" />
            <label htmlFor="keep-signed-in" className="text-sm text-gray-700">
              Keep me signed in
            </label>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm font-medium text-gray-500">
              or sign in with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-between gap-3 flex-wrap mb-6">
            <div className="w-[60px] h-[60px] border border-gray-300 text-2xl flex items-center justify-center shadow-md rounded-xl">
              <FaKey />
            </div>
            <div className="w-[60px] h-[60px] border border-gray-300 text-2xl flex items-center justify-center shadow-md rounded-xl">
              <FaApple />
            </div>
            <div className="w-[60px] h-[60px] border border-gray-300 text-2xl flex items-center justify-center shadow-md rounded-xl">
              <FcGoogle />
            </div>
            <div className="w-[60px] h-[60px] border border-gray-300 text-2xl flex items-center justify-center shadow-md rounded-xl text-blue-600">
              <FaFacebook />
            </div>
          </div>

          {/* Sign up option */}
          <div className="text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signinpage;
