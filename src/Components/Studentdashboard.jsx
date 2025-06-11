import React, { useState } from "react";
import cartimage2 from "../assets/cartimage2.jpg";
import dashboardtwoimg from "../assets/dashboardtwoimg.jpg";
import Vector from "../assets/Vector.png";
import Vectortwo from "../assets/Vectortwo.png";
import Vectorthree from "../assets/Vectorthree.png";
import { FaStar } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FaAngleDoubleRight, FaBook, FaPowerOff } from "react-icons/fa";
import { FaChartBar, FaAngleDown } from "react-icons/fa";
import { IoIosGitPullRequest, IoMdGitPullRequest } from "react-icons/io";
import { RiCellphoneLine, RiStickyNoteAddLine } from "react-icons/ri";
import { MdAddHomeWork, MdOutlinePayment, MdReport } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
const Studentdashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fatherName: "",
    gender: "",
    contact: "",
    dob: "",
    address: "",
    city: "",
    province: "",
    qualification: "",
    department: "",
    photo: null,
    cnicPic: null,
    degreePic: null,
    extraDocs: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      fatherName: "",
      gender: "",
      contact: "",
      dob: "",
      address: "",
      city: "",
      province: "",
      qualification: "",
      department: "",
      photo: null,
      cnicPic: null,
      degreePic: null,
      extraDocs: null,
    });
    setErrors({});
    document.querySelector("form").reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic validation
    if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (formData.fatherName.trim().length < 2)
      newErrors.fatherName = "Father's name must be at least 2 characters";
    if (!formData.gender) newErrors.gender = "Please select a gender";
    if (!/^\d{10,15}$/.test(formData.contact))
      newErrors.contact = "Contact must be 10–15 digits";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (formData.address.trim().length < 5)
      newErrors.address = "Address is too short";
    if (formData.city.trim().length < 2)
      newErrors.city = "City must be at least 2 characters";
    if (formData.province.trim().length < 2)
      newErrors.province = "Province must be at least 2 characters";
    if (formData.qualification.trim().length < 2)
      newErrors.qualification = "Qualification must be at least 2 characters";
    if (formData.department.trim().length < 2)
      newErrors.department = "Department must be at least 2 characters";

    const imagePattern = /\.(jpg|jpeg|png)$/i;
    const docPattern = /\.(pdf|jpg|jpeg|png)$/i;

    if (!formData.photo || !imagePattern.test(formData.photo.name))
      newErrors.photo = "Photo must be a JPG or PNG image";
    if (!formData.cnicPic || !imagePattern.test(formData.cnicPic.name))
      newErrors.cnicPic = "CNIC photo must be a JPG or PNG image";
    if (!formData.degreePic || !imagePattern.test(formData.degreePic.name))
      newErrors.degreePic = "Degree photo must be a JPG or PNG image";
    if (formData.extraDocs && !docPattern.test(formData.extraDocs.name))
      newErrors.extraDocs = "File must be a JPG, PNG or PDF";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Successful submission
    alert("Form submitted successfully!");
    console.log("Submitted data:", formData);
    resetForm();
  };

  const renderError = (field) =>
    errors[field] && (
      <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
    );

  const [activeChapter, setActiveChapter] = useState(null);
  const [showDashboardDropdown, setShowDashboardDropdown] = useState(false);

  const toggleChapter = (chapter) => {
    setActiveChapter(activeChapter === chapter ? null : chapter);
  };

  return (
    <>
      {/* Student dashboard 1 */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row  md:p-4 min-h-screen gap-4 mb-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white rounded-xl shadow-md p-4">
          <div className="mb-4">
            <img
              src={cartimage2}
              alt="Course"
              className="object-cover w-full h-full rounded"
            />
          </div>

          {[2, 3, 4].map((num) => (
            <div key={num}>
              <button
                className="w-full text-left py-2 font-semibold text-gray-600  hover:bg-[#d5dcec] transition rounded"
                onClick={() => toggleChapter(num)}
              >
                &#9662; Chapter {num}
              </button>
              {activeChapter === num && (
                <ul className="ml-4 text-sm text-gray-600 transition-all duration-500 ease-in-out">
                  <a href="#">
                    <li className="mb-2 hover:underline">Video File 1.mp4</li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="mb-2 hover:underline">Video File 2.mp4</li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="mb-2 hover:underline">Video File 3.mp4</li>
                  </a>
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="w-full md:w-3/4 px-0 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl underline font-semibold text-[#313D6A] mb-6">
              Adobe Photoshop Course
            </h2>
            <div>
              <FaBell className="text-2xl text-gray-600" />
            </div>
          </div>
          <video
            controls
            className="w-full rounded-lg shadow-md"
            poster="/images/cartimage2.jpg"
          >
            <source src="/videos/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/*  Student dashboard 2 */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row   min-h-screen gap-4 mb-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white  rounded-xl rounded-t-3xl shadow-md">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-4 bg-[#313D6A] rounded-3xl p-8">
            <img
              src={dashboardtwoimg}
              alt="Course"
              className="object-cover w-32 h-32 md:w-40 md:h-40 rounded-full mb-4"
            />
            <h1 className="text-white flex items-center gap-2 underline text-lg  hover:text-blue-300 transition-colors duration-200 cursor-pointer">
              Maryam Safdar <FaAngleDoubleRight />
            </h1>
          </div>

          {/* Dropdown Menu */}
          <div className="px-4 pb-4">
            <button
              onClick={() => setShowDashboardDropdown(!showDashboardDropdown)}
              className="w-full flex items-center justify-between text-left px-4 py-2 bg-[#e0e6f1] text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2"
            >
              <span className="flex items-center gap-2">
                <FaChartBar /> Dashboard
              </span>
              <FaAngleDown
                className={`transform transition-transform duration-300 ${
                  showDashboardDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDashboardDropdown && (
              <ul className="ml-6 mt-2 text-sm text-[#313D6A] space-y-2 transition-all duration-300">
                <li className="hover:underline cursor-pointer">Overview</li>
                <li className="hover:underline cursor-pointer">Analytics</li>
                <li className="hover:underline cursor-pointer">Settings</li>
              </ul>
            )}

            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <FaBook /> Courses
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <IoMdGitPullRequest /> Request
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <RiStickyNoteAddLine /> Attendance
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <MdOutlinePayment /> Payment Record
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <RiCellphoneLine /> Agreement
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <MdAddHomeWork /> Home Tuition
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <MdReport /> Report
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <FaPowerOff /> Logout
              </span>
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-3/4 px-0 md:px-6">
          <div className="flex items-center justify-between flex-wrap gap-y-2 mb-6">
            <div className="flex items-center gap-x-4 flex-wrap">
              <h2 className="text-2xl underline font-semibold ">Filters:</h2>
              <div className="flex items-center flex-wrap gap-2">
                <button className="border  bg-black text-white px-6 py-2 rounded-4xl cursor-pointer ">
                  All
                </button>
                <button className="border border-gray-200 px-6 py-2 rounded-4xl cursor-pointer hover:bg-gray-100">
                  Completed
                </button>
                <button className="border border-gray-200 px-6 py-2 rounded-4xl cursor-pointer hover:bg-gray-100">
                  Un-Completed
                </button>
              </div>
            </div>
            <div>
              <FaBell className="text-2xl text-gray-600" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between border border-gray-300 p-4 rounded mb-4 text-gray-500">
            <p className="hover:underline mb-2 md:mb-0">Preview</p>
            <p className="hover:underline mb-2 md:mb-0">Course Title</p>
            <p className="hover:underline mb-2 md:mb-0">Buying Date</p>
            <p className="hover:underline mb-2 md:mb-0">Total lecture</p>
            <p className="hover:underline">Progress Rate</p>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-300 rounded-md shadow-sm p-3 flex flex-col md:flex-row items-start gap-4"
              >
                {/* Thumbnail */}
                <img
                  src={cartimage2}
                  alt="Course Thumbnail"
                  className="w-full md:w-40 h-40 md:h-auto object-cover rounded-md"
                />

                {/* Course Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col md:flex-row  md:justify-between gap-4">
                    <div>
                      <p className="text-gray-800 font-semibold text-base mb-1">
                        Adobe Photoshop: Beginner To...
                      </p>
                      <p className="text-sm text-gray-500">By Ibrahim</p>
                    </div>

                    <div className="text-sm text-gray-600">
                      <p>September 25, 2021</p>
                    </div>

                    <div className="text-sm text-gray-600">
                      <p>36 Lectures</p>
                    </div>

                    <div className="text-sm text-gray-600">
                      <p className="text-yellow-600">56% Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Student dashboard 3 */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row  md:p-4 min-h-screen gap-4 mb-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white rounded-xl rounded-t-3xl shadow-md">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-4 bg-[#313D6A] rounded-3xl p-8">
            <img
              src={dashboardtwoimg}
              alt="Course"
              className="object-cover w-32 h-32 md:w-40 md:h-40 rounded-full mb-4"
            />
            <h1 className="text-white flex items-center gap-2 underline text-lg  hover:text-blue-300 transition-colors duration-200 cursor-pointer">
              Maryam Safdar <FaAngleDoubleRight />
            </h1>
          </div>

          {/* Dropdown Menu */}
          <div className="px-4 pb-4">
            <button
              onClick={() => setShowDashboardDropdown(!showDashboardDropdown)}
              className="w-full flex items-center justify-between text-left px-4 py-2 bg-[#e0e6f1] text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2"
            >
              <span className="flex items-center gap-2">
                <FaChartBar /> Dashboard
              </span>
              <FaAngleDown
                className={`transform transition-transform duration-300 ${
                  showDashboardDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDashboardDropdown && (
              <ul className="ml-6 mt-2 text-sm text-[#313D6A] space-y-2 transition-all duration-300">
                <li className="hover:underline cursor-pointer">Overview</li>
                <li className="hover:underline cursor-pointer">Analytics</li>
                <li className="hover:underline cursor-pointer">Settings</li>
              </ul>
            )}

            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <FaBook /> Courses
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <IoMdGitPullRequest /> Request
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <RiStickyNoteAddLine /> Attendance
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <MdOutlinePayment /> Payment Record
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <RiCellphoneLine /> Agreement
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <MdAddHomeWork /> Home Tuition
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <MdReport /> Report
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <FaPowerOff /> Logout
              </span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-3/4 px-0 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            <h2 className="text-2xl underline font-semibold text-[#313D6A]">
              Welcome To Dashboard
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <SlCalender />
                <p>5 July 2021</p>
              </div>
              <input
                type="text"
                placeholder="Search Anything"
                className="border border-gray-300 shadow-sm px-3 py-2 rounded outline-none w-full sm:w-auto"
              />
              <FaBell className="text-2xl text-gray-600" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {/* Left Card - Quick Overview */}
            <div className="relative bg-gradient-to-r from-[#1F3A93] via-[#3549B9] to-[#5B73E8] text-white rounded-lg p-6 shadow-md overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-no-repeat bg-cover opacity-10"
                style={{ backgroundImage: "url('/your-image-path.jpg')" }}
              ></div>

              {/* Decorative Background Circles */}
              <div className="absolute top-4 left-6 w-20 h-20 bg-white opacity-10 rounded-full blur-lg"></div>
              <div className="absolute bottom-6 right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>
              <div className="absolute top-20 right-20 w-12 h-12 bg-white opacity-10 rounded-full blur-md"></div>

              {/* Main Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h2 className="text-xl font-bold">Quick Overview</h2>
                    <p className="text-sm opacity-80">Courses & Tuitions</p>
                  </div>
                  <p className="text-sm">Courses &gt;</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-black p-4 rounded-lg shadow-md w-full sm:w-1/3">
                    <h3 className="font-semibold text-lg">English</h3>
                    <p className="text-sm">20% Completed</p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-400 text-black p-4 rounded-lg shadow-md w-full sm:w-1/3">
                    <h3 className="font-semibold text-lg">French</h3>
                    <p className="text-sm">10% Completed</p>
                  </div>

                  <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white p-4 rounded-lg shadow-md w-full sm:w-1/3">
                    <h3 className="font-semibold text-lg">Web Dev</h3>
                    <p className="text-sm">40% Completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Attendance & Performance */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-lg font-semibold mb-4">Attendance</h2>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex justify-between">
                  <span>1st Week</span>
                  <span>2 Absents</span>
                </li>
                <li className="flex justify-between">
                  <span>2nd Week</span>
                  <span>1 Absents</span>
                </li>
                <li className="flex justify-between">
                  <span>3rd Week</span>
                  <span>0 Absents</span>
                </li>
              </ul>

              <div className="bg-green-600 text-white font-semibold rounded mt-6 p-3 text-center">
                Performance: <span className="font-bold">70%</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-lg font-semibold mb-4">
                Your Upcoming Courses / Tuition
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Card */}
                <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-3 flex gap-2 rounded-md w-full">
                  <img src={Vector} className="w-12 h-12 object-contain" />
                  <div>
                    <h1 className="text-xl text-white font-bold">Calculus</h1>
                    <p className="text-sm text-white">10 Courses</p>
                    <button className="bg-gray-200 text-gray-500 px-3 py-1 mt-2 rounded text-sm">
                      Start Now
                    </button>
                  </div>
                </div>

                {/* Second Card */}
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 flex gap-2 rounded-md w-full">
                  <img src={Vectortwo} className="w-12 h-12 object-contain" />
                  <div>
                    <h1 className="text-xl text-white font-bold">Algebra</h1>
                    <p className="text-sm text-white">8 Courses</p>
                    <button className="bg-gray-200 text-gray-500 px-3 py-1 mt-2 rounded text-sm">
                      Start Now
                    </button>
                  </div>
                </div>

                {/* Third Card */}
                <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 p-3 flex gap-2 rounded-md w-full">
                  <img src={Vectorthree} className="w-12 h-12 object-contain" />
                  <div>
                    <h1 className="text-xl text-white font-bold">Geometry</h1>
                    <p className="text-sm text-white">5 Courses</p>
                    <button className="bg-gray-200 text-gray-500 px-3 py-1 mt-2 rounded text-sm">
                      Start Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-lg font-semibold mb-4">Payment</h2>

              <div className="flex justify-between items-center bg-green-600 text-white font-semibold rounded mt-6 p-3">
                <p>Due Payment :</p>
                <p>1500 Rs</p>
              </div>
              <div className="flex justify-between items-center bg-[#404040] text-white font-semibold rounded mt-3 p-3">
                <p>Paid :</p>
                <p>2500 Rs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Dashboard 4 */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row  md:p-4 min-h-screen gap-4 mb-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white rounded-xl rounded-t-3xl shadow-md">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-4 bg-[#313D6A] rounded-3xl p-8">
            <img
              src={dashboardtwoimg}
              alt="Course"
              className="object-cover w-32 h-32 md:w-40 md:h-40 rounded-full mb-4"
            />
            <h1 className="text-white flex items-center gap-2 underline text-lg  hover:text-blue-300 transition-colors duration-200 cursor-pointer">
              Maryam Safdar <FaAngleDoubleRight />
            </h1>
          </div>

          {/* Dropdown Menu */}
          <div className="px-4 pb-4">
            <button
              onClick={() => setShowDashboardDropdown(!showDashboardDropdown)}
              className="w-full flex items-center justify-between text-left px-4 py-2 bg-[#e0e6f1] text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2"
            >
              <span className="flex items-center gap-2">
                <FaChartBar /> Dashboard
              </span>
              <FaAngleDown
                className={`transform transition-transform duration-300 ${
                  showDashboardDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDashboardDropdown && (
              <ul className="ml-6 mt-2 text-sm text-[#313D6A] space-y-2 transition-all duration-300">
                <li className="hover:underline cursor-pointer">Overview</li>
                <li className="hover:underline cursor-pointer">Analytics</li>
                <li className="hover:underline cursor-pointer">Settings</li>
              </ul>
            )}

            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <FaBook /> Courses
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <IoMdGitPullRequest /> Request
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <RiStickyNoteAddLine /> Attendance
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <MdOutlinePayment /> Payment Record
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <RiCellphoneLine /> Agreement
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <MdAddHomeWork /> Home Tuition
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <MdReport /> Report
              </span>
            </button>
            <button className="w-full flex items-center justify-between text-left px-4 py-2  text-[#313D6A] font-semibold rounded-md hover:bg-[#d5dcec] transition mb-2">
              <span className="flex items-center gap-2">
                <FaPowerOff /> Logout
              </span>
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full  px-0 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-0">
            <h2 className="text-2xl underline font-semibold text-[#313D6A]">
              Welcome To Profile
            </h2>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <SlCalender className="text-lg" />
              <p>5 July 2021</p>
            </div>
          </div>

          <div className="w-full  px-4 md:px-6 py-6 bg-white rounded-md shadow">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-4 max-w-4xl mx-auto"
            >
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("name")}
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("email")}
                </div>
              </div>

              {/* Father's Name and Gender */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("fatherName")}
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {renderError("gender")}
                </div>
              </div>

              {/* Contact and DOB */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("contact")}
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("dob")}
                </div>
              </div>

              {/* Address and City */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("address")}
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("city")}
                </div>
              </div>

              {/* Province and Qualification */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block border-gray-300 font-medium text-gray-700">
                    Province
                  </label>
                  <input
                    type="text"
                    name="province"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("province")}
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Qualification
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("qualification")}
                </div>
              </div>

              {/* Department and Photo */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("department")}
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Passport Size Photo
                  </label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("photo")}
                </div>
              </div>

              {/* CNIC and Degree */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    CNIC Picture
                  </label>
                  <input
                    type="file"
                    name="cnicPic"
                    accept="image/*"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("cnicPic")}
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Degree Picture
                  </label>
                  <input
                    type="file"
                    name="degreePic"
                    accept="image/*"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleChange}
                  />
                  {renderError("degreePic")}
                </div>
              </div>

              {/* Extra Documents */}
              <div>
                <label className="block font-medium text-gray-700">
                  Other Documents (optional)
                </label>
                <input
                  type="file"
                  name="extraDocs"
                  accept=".pdf,image/*"
                  className="w-full  border-gray-300 border rounded px-3 py-2"
                  onChange={handleChange}
                />
                {renderError("extraDocs")}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#313D6A] text-white px-6 py-2 rounded hover:bg-[#1f2a4d]"
                >
                  Submit Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentdashboard;
