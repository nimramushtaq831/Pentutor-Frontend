import onlinecours from "../assets/onlinecours.png";
import Subtract1 from "../assets/Subtract 1.png";
import cartimage2 from "../assets/cartimage2.jpg";
const Onlinecoursespage = () => {
  const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="w-full relative bg-[#F5F5F8]">
      <div className="max-w-screen-xl pb-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        <div className="w-full md:w-1/2 mt-10 flex flex-col justify-center items-center text-[#313D6A]  text-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Search Online Courses
          </h1>
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            of Your Choice
          </h1>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          
          <img
            src={onlinecours}
            alt="home-tutor"
            className="w-full max-w-sm md:max-w-[100%] relative z-10"
          />
        </div>
      </div>

      <div className="w-[90%] max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col  mb-10">
          <div className="w-full max-w-md flex space-x-2">
            <input
              type="text"
              placeholder="Search courses..."
              className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
            <button className="bg-[#F50740E5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#e0063b] transition duration-300">
              Search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Onlinecoursespage;
