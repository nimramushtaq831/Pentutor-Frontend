import Hometutor from "../assets/Home-tutor.png";
import individualgroup from "../assets/individualgroup.png";
import Subtract1 from "../assets/Subtract 1.png";
import benefits from "../assets/benefits.png";
import pastpapers from "../assets/pastpapers.png";
import Subtract from "../assets/Subtract.png";
import {
  FaBook,
  FaChalkboardTeacher,
  FaHome,
  FaChartLine,
} from "react-icons/fa";
const Hometutoringsinglepage = () => {
  return (
    <div className="relative bg-[#EAECF0] w-full">
      <div className="max-w-screen-xl pb-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        <div className="w-full md:w-1/2 mt-10 flex flex-col justify-center items-center text-[#313D6A] text-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Home Tutoring
          </h1>
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Service
          </h1>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <img
            src={Hometutor}
            alt="home-tutor"
            className="w-full max-w-sm md:max-w-[100%] relative z-10"
          />
        </div>
      </div>

      {/* center content */}
      <div className="w-[90%] m-auto text-base md:text-lg text-gray-900 leading-relaxed pb-10">
        <p className="text-center">
          Pen Tutor provides the best home tuition services all over Pakistan.
          Home Tuition has the ability to solve the problems of students face by
          face. Our private home tutors have the capability to quickly identify
          the weak areas of your kids and solve their problems
        </p>
        <p className="text-center">in an efficient way.</p>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-19 py-20">
        {/* Existing Cards */}
        {/* Card 1 */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
          <FaBook className="text-5xl text-[#313D6A] mb-4" />
          <h1 className="text-2xl font-bold mb-4">SUBJECTS</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Pen Tutor provides tutors for all classes—from grade 1 to
            university— covering subjects like English, Mathematics, Chemistry,
            Biology, Physics, and Urdu. We also offer coaching in computer,
            language, web development, and graphic design courses.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
          <FaChalkboardTeacher className="text-5xl text-[#313D6A] mb-4" />
          <h1 className="text-2xl font-bold mb-4">SMART LEARNING SOLUTIONS</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Students often struggle in classrooms due to limited attention. Our
            tutors provide one-on-one guidance, boost confidence, encourage
            questions, and focus on weak areas—ensuring real academic growth.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
          <FaHome className="text-5xl text-[#313D6A] mb-4" />
          <h1 className="text-2xl font-bold mb-4">BENEFITS OF HOME TUTORING</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            With regular schedules, test plans, and personalized strategies, our
            experienced tutors turn weaknesses into strengths. Students show
            significant improvement within weeks through consistent home
            tutoring.
          </p>
        </div>

        {/* ✅ New Card 4 */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
          <FaChartLine className="text-5xl text-[#313D6A] mb-4" />
          <h1 className="text-2xl font-bold mb-4">PROGRESS & RESULTS</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            We track every student’s academic journey using performance reports
            and feedback. This data-driven approach helps set clear goals,
            measure growth, and ensure every tutoring session delivers visible
            outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hometutoringsinglepage;
