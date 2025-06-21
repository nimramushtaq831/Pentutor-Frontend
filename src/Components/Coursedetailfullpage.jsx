import Rectangle from "../assets/Rectangle 78.png";
import graphicdesign from "../assets/graphicdesign.jpg";
import { FaYoutube } from "react-icons/fa";
import seo from "../assets/seo.png";
import Rec from "../assets/Rec.png";
import Groupimg from "../assets/Group 408.png";
import { RiInfinityLine } from "react-icons/ri";
import { MdOutlineConnectedTv } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import cartimage2 from "../assets/cartimage2.jpg";
const Coursedetailfullpage = () => {
  const cardList = [1, 2, 3];
  return (
    <div className="w-full">
      <div className="relative w-full h-auto md:h-[500px] flex flex-col md:flex-row">
        {/* Base Image */}
        <img
          src={Rectangle}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay Image */}
        <img
          src={graphicdesign}
          alt="Overlay"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
          {/* Left Section – Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-8 text-white">
            <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-2">
              Learn SEO: Beginner To Advance
            </h1>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Rank Your Website On 1st Page
            </h1>

            <h1 className="text-base sm:text-lg lg:text-xl font-bold mb-2">
              Use Advanced tools to rank your website on 1st page
            </h1>

            <p className="mb-4 text-yellow-400 text-sm flex flex-wrap gap-x-4 gap-y-1">
              <span>4.8 ★</span>
              <span>Instructor Rating</span>
              <span>(369 Reviews)</span>
              <span>560 Students</span>
            </p>

            <p className="text-sm flex flex-wrap mb-8 gap-x-1">
              <span className="text-yellow-400">Language: </span>
              <span>Urdu</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-[#F4C020] to-[#EFD279] px-5 py-2 rounded-md transition duration-300 hover:brightness-110 hover:scale-105 text-black hover:text-white font-medium shadow-md">
                Add to Cart
              </button>
              <button className="border border-white px-5 py-2 rounded-md text-white hover:bg-white hover:text-black transition duration-300 hover:scale-105 shadow-md">
                Buy Now
              </button>
            </div>
          </div>

          {/* Right Section – Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-6">
            <img
              src={seo}
              alt="Right Section"
              className="w-full max-w-sm md:max-w-[90%] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-6 py-20">
        {/* Left Section */}
        <div className="w-full h-fit md:w-[40%] lg:w-[452px] bg-white shadow-md p-4 rounded">
          <h1 className="text-xl font-bold text-center mb-10">
            This Course Includes
          </h1>
          <div className="flex flex-col space-y-4 text-gray-500">
            <span className="flex items-center gap-2 font-medium">
              <FaYoutube className="text-xl" />
              Latest Recorded Lectures
            </span>
            <span className="flex items-center gap-2 font-medium">
              <RiInfinityLine className="text-2xl" />
              Life Time Access
            </span>
            <span className="flex items-center gap-2 font-medium">
              <MdOutlineConnectedTv className="text-2xl" />
              Mobile & Web View
            </span>
            <span className="flex items-center gap-2 font-medium">
              <MdOutlineContactPage className="text-2xl" />
              Assignments
            </span>
            <span className="flex items-center gap-2 font-medium">
              <PiCertificate className="text-2xl" />
              Certificate On Completion
            </span>
            <div className="flex justify-center pt-2">
              <button className="bg-gradient-to-r from-[#F4C020] to-[#EFD279] px-5 py-2 rounded-md transition duration-300 hover:brightness-110 hover:scale-105 text-black hover:text-white font-medium shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[60%] lg:w-[1123px] bg-white shadow-md p-4 rounded">
          <h1 className="text-xl font-bold mb-10">
            Things You Will Learn in this Course
          </h1>
          <p className="flex items-center gap-x-10 text-gray-500 mb-6">
            <span className="text-black">1 .</span>
            Latest Recorded Lectures
          </p>
          <p className="flex items-center gap-x-10 text-yellow-400 mb-6">
            <span className="text-black">2 .</span>
            Latest Recorded Lectures
          </p>
          <p className="flex items-center gap-x-10 text-gray-500 mb-6">
            <span className="text-black">3 .</span>
            Latest Recorded Lectures
          </p>
          <p className="flex items-center gap-x-10 text-yellow-400 mb-6">
            <span className="text-black">4 .</span>
            Latest Recorded Lectures
          </p>
          <p className="flex items-center gap-x-10 text-gray-500 mb-6">
            <span className="text-black">5 .</span>
            Latest Recorded Lectures
          </p>
          <p className="flex items-center gap-x-10 text-yellow-400 mb-6">
            <span className="text-black">6 .</span>
            Latest Recorded Lectures
          </p>
          <p className="flex items-center gap-x-10 text-gray-500 mb-6">
            <span className="text-black">7 .</span>
            Latest Recorded Lectures
          </p>
          <p className="flex items-center gap-x-10 text-yellow-400 mb-6">
            <span className="text-black">8 .</span>
            Latest Recorded Lectures
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto  mb-20">
        <div className="bg-white shadow-md p-4 rounded">
          <h1 className="text-xl font-bold mb-6">
            Course Details & Requirements
          </h1>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a
            dignissim neque aliquam dis dui gravida. Pretium sed risus
            scelerisque bibendum sagittis. Tristique cursus id sed amet. Sit
            nisl vivamus ultricies phasellus malesuada in libero, et. Quis
            sollicitudin purus dolor ipsum, dictumst egestas pretium sit. Nunc,
            risus, feugiat egestas consectetur. Lectus nulla morbi ut est
            tincidunt elit eu, bibendum. Quis turpis eu adipiscing integer at at
            nulla nisl. Nunc, vivamus tortor augue at tellus. Tincidunt ipsum a
            vel lorem lectus ac in at turpis. Orci, tempor nec arcu velit
            facilisis posuere egestas suspendisse.
          </p>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Ultrices arcu venenatis nulla non, eget senectus diam. Blandit quis
            egestas et pellentesque est. Id fermentum, arcu pellentesque sed eu
            nunc, lacus. Sit dui nisl, dui duis cursus amet aenean. Id sit
            elementum proin sapien a malesuada at sit diam. Vitae tortor
            maecenas sit nibh in diam interdum. Porttitor risus sed
            eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Urna a dignissim neque aliquam dis dui gravida. Pretium sed risus
            scelerisque bibendum sagittis. Tristique cursus id sed amet. Sit
            nisl vivamus ultricies phasellus malesuada in libero, et. Quis
            sollicitudin purus dolor ipsum, dictumst egestas pretium sit. Nunc,
            risus, feugiat egestas consectetur. Lectus nulla morbi ut est
            tincidunt elit eu, bibendum. Quis turpis eu adipiscing integer at at
            nulla nisl. Nunc, vivamus tortor augue at tellus. Tincidunt ipsum a
            vel lorem lectus ac in at turpis. Orci,....
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="bg-white shadow-md rounded-lg">
          <div className="flex flex-col md:flex-row justify-between rounded-t-lg items-center p-6 bg-[#313D6A] gap-4">
            <div>
              <h1 className="text-white text-4xl font-bold mb-2">
                Course Contents
              </h1>
              <span className="text-yellow-400">
                15 Sections, 40 Lectures, 2h 36m total length
              </span>
            </div>
            <button className="bg-gradient-to-r from-[#F4C020] to-[#EFD279] px-5 py-2 rounded-md transition duration-300 hover:brightness-110 hover:scale-105 text-black hover:text-white font-medium shadow-md">
              Add to Cart
            </button>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2 md:gap-0">
              <p className="flex items-center gap-x-3 text-base font-medium text-gray-800">
                <FaPlay />
                Getting Started
              </p>
              <span className="text-sm text-gray-500">
                3 Lectures. 1 Attachment. 1 Assignment. 25m
              </span>
            </div>
            <hr className="border-t border-gray-300 mb-4" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2 md:gap-0">
              <p className="flex items-center gap-x-3 text-base font-medium text-gray-800">
                <FaPlay />
                Getting Started
              </p>
              <span className="text-sm text-gray-500">
                3 Lectures. 1 Attachment. 1 Assignment. 25m
              </span>
            </div>
            <hr className="border-t border-gray-300 mb-4" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2 md:gap-0">
              <p className="flex items-center gap-x-3 text-base font-medium text-gray-800">
                <FaPlay />
                Getting Started
              </p>
              <span className="text-sm text-gray-500">
                3 Lectures. 1 Attachment. 1 Assignment. 25m
              </span>
            </div>
            <hr className="border-t border-gray-300 mb-4" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2 md:gap-0">
              <p className="flex items-center gap-x-3 text-base font-medium text-gray-800">
                <FaPlay />
                Getting Started
              </p>
              <span className="text-sm text-gray-500">
                3 Lectures. 1 Attachment. 1 Assignment. 25m
              </span>
            </div>
            <hr className="border-t border-gray-300" />
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto py-6">
        <button className="w-full text-center border border-gray-300 py-4 cursor-pointer rounded-lg font-bold hover:bg-gray-100 transition">
          11 More Sections
        </button>
      </div>
      <div className="w-[90%] mx-auto py-10">
        <h1 className="text-xl font-bold mb-10">Student Feedback</h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-y-8 gap-x-12">
          {/* Rating Overview */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl text-[#313D6A] font-bold mb-2">4.9</h1>
            <p className="text-2xl text-yellow-400 mb-2">★★★★★</p>
            <p className="text-gray-600">Course Rating</p>
          </div>

          {/* Rating Image */}
          <div>
            <img
              src={Groupimg}
              alt="Group Feedback"
              className="h-auto max-h-[160px] w-auto"
            />
          </div>

          {/* Rating Breakdown */}
          <div className="flex flex-col space-y-2">
            <p>
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="ml-2 text-gray-700">80%</span>
            </p>
            <p>
              <span className="text-yellow-400 text-2xl">★★★★☆</span>
              <span className="ml-2 text-gray-700">20%</span>
            </p>
            <p>
              <span className="text-yellow-400 text-2xl">★★★☆☆</span>
              <span className="ml-2 text-gray-700">10%</span>
            </p>
            <p>
              <span className="text-yellow-400 text-2xl">★★☆☆☆</span>
              <span className="ml-2 text-gray-700">2%</span>
            </p>
            <p>
              <span className="text-yellow-400 text-2xl">★☆☆☆☆</span>
              <span className="ml-2 text-gray-700">0%</span>
            </p>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div className="w-[90%] mx-auto py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 gap-x-6">
          {/* Avatar */}
          <div>
            <h1 className="bg-gray-300 text-white font-bold w-14 h-14 flex items-center justify-center text-xl rounded-full">
              A
            </h1>
          </div>

          {/* Name & Rating Info */}
          <div>
            <h1 className="text-lg font-semibold text-gray-800">Arham Munir</h1>
            <p className="flex flex-col sm:flex-row sm:items-center gap-x-4 text-sm text-gray-500">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="mt-1 sm:mt-0">2 days ago</span>
            </p>
          </div>
        </div>
        <div className="w-[90%] mx-auto p-6 sm:p-8 md:p-6 ">
          <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut
            placerat faucibus a ridiculus nibh. Arcu quis fames imperdiet risus
            aliquam. Vitae, etiam tempus viverra habitant volutpat faucibus.
            Laoreet hac et sed ullamcorper habitant risus egestas.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
            Scelerisque vel mi lectus faucibus magna aenean amet massa. Amet
            odio aliquet porttitor turpis. Ipsum vulputate molestie mattis id
            aenean nullam donec ultrices tortor. Auctor senectus suscipit id
            odio malesuada mattis. Sem risus, purus euismod integer in ut.
            Condimentum nec lectus congue fermentum. Lacinia aliquet adipiscing
            tincidunt sit. Orci at pharetra rhoncus praesent vulputate.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
            Duis placerat diam duis nec. Sapien ac sit justo nec potenti neque
            sed sed. Tempus ultrices tellus sit ridiculus aliquam. Massa
            lobortis est nunc, diam mattis cras etiam nisi. Ipsum consectetur
            feugiat mattis nisi senectus egestas aenean nullam fringilla.
            Dignissim aliquet orci donec nisi cras. Quis blandit in morbi at.
            Cursus neque.
          </p>
        </div>

        <div className="w-[90%] px-6 mx-auto flex items-center gap-x-6 mb-10">
          <div className="flex gap-x-4">
            <div className="border border-gray-300 p-2 rounded-full">
              <ThumbsUp className="text-black w-6 h-6" />
            </div>
            <div className="border border-gray-300 p-2 rounded-full">
              <ThumbsDown className="text-black w-6 h-6" />
            </div>
          </div>

          <div>
            <p className="underline text-gray-500">Report</p>
          </div>
        </div>
        <div className="w-[90%] px-6 mx-auto flex flex-col md:flex-row gap-y-6 gap-x-20">
          {/* Left image */}
          <img
            src={Rec}
            alt="Recommendation"
            className="w-2 h-24 object-cover"
          />

          {/* Right content */}
          <div className="flex flex-col md:flex-row items-start gap-y-4 gap-x-6">
            {/* Avatar */}
            <div>
              <h1 className="bg-gray-300 text-white font-bold w-14 h-14 flex items-center justify-center text-xl rounded-full">
                A
              </h1>
            </div>

            {/* Name, Info, Message */}
            <div>
              <h1 className="text-lg font-semibold text-gray-800">
                Arham Munir
              </h1>
              <p className="flex flex-col sm:flex-row sm:items-center gap-x-4 text-sm text-gray-500">
                <span className="text-gray-400">Instructor Response.</span>
                <span className="mt-1 sm:mt-0 text-gray-400">2 days ago</span>
              </p>
              <p className="leading-relaxed text-gray-600 md:text-base mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt vitae arcu cursus porttitor adipiscing at. Sed
                vulputate ac at donec lacus enim. At facilisis fames.
              </p>
            </div>
          </div>
        </div>
        <hr className="w-[90%] mx-auto border-gray-300 border-[1.5px]  mt-20 mb-20" />
        <div className="w-[90%] mx-auto] mb-10">
          <span className="text-2xl font-bold text-gray-600">
            More Courses By{" "}
          </span>
          <span className="text-2xl font-bold text-yellow-400">
            Ibrahim Akram
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cardList.map((id) => (
            <div
              key={id}
              className="w-full bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Course Image */}
              <div className="h-48 bg-blue-100 flex items-center justify-center overflow-hidden">
                <img
                  src={cartimage2}
                  alt="Course"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-4">
                {/* Category and Level */}
                <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                  <span className="text-[#0cc741a4]">Chemistry</span>
                  <span>O-Level</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug">
                  Adobe Photoshop: Beginner To Advance In 1 Month
                </h3>

                {/* Rating and Students */}
                <div className="flex items-center text-sm mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400 font-semibold ml-1">
                    4.8
                  </span>
                  <span className="text-gray-500 ml-1">(579)</span>
                  <span className="text-gray-500 mx-2">•</span>
                  <span className="text-gray-500">770 Students</span>
                </div>

                {/* Duration and Lectures */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>1 hr 45 min</span>
                  <span className="mx-2">•</span>
                  <span>46 Lectures</span>
                </div>

                {/* Instructor and Price */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-700">
                    Ibrahim Akram
                  </span>
                  <span className="text-lg font-bold text-[#F50740E5]">
                    20K PKR
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coursedetailfullpage;
