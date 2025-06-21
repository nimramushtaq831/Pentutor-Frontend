import onlinetuotoring from "../assets/onlinetuotoring.png";
import line58 from "../assets/Line 58.png";
import individualgroup from "../assets/individualgroup.jpg";
import individualgroup2 from "../assets/individualgroup2.jpg";
import individualgroup3 from "../assets/individualgroup3.jpg";

const Onlinetuotoringsinglepage = () => {
  return (
    <div className="relative w-full">
      <div className="w-full bg-[#EAECF0] mb-20">
        <div className="max-w-screen-xl pb-20 flex flex-col md:flex-row items-center justify-between md:px-0">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <img
              src={onlinetuotoring}
              alt="online acd session"
              className="w-full max-w-sm md:max-w-[100%] relative z-10"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-[#313D6A]  text-center">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Online Tutoring
            </h1>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Service
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto">
        <p className="text-base md:text-lg text-center leading-relaxed text-gray-900 mb-10">
          <strong>Pen Tutor</strong> is a platform that provides education
          through various modes to make quality learning accessible to every
          child.
          <strong> Pen Tutor</strong> arranges highly professional and engaging
          online academy sessions that fulfill the essential study needs of
          every student. We focus on identifying and solving each student's
          individual problems.
          <strong> Pen Tutor</strong>'s mission is to offer a better learning
          environment that engages students in a challenging atmosphere and
          gives a{" "}
          <strong>boost to their efforts toward achieving their dreams.</strong>
        </p>

        <p className="text-base md:text-lg text-center leading-relaxed text-gray-900 mb-20">
          <strong>Pen Tutor</strong> provides highly qualified tutors for all
          educational levels — from
          <strong> grade 1 to university studies</strong>. We offer
          subject-specific tutoring in
          <strong>
            {" "}
            English, Mathematics, Chemistry, Biology, Physics, and Urdu
          </strong>
          . We also offer one-on-one coaching for various courses, including
          computer courses, language courses, web development, and graphic
          design. Additionally,{" "}
          <strong>
            individual test preparation and specialized coaching
          </strong>{" "}
          are available.
        </p>
      </div>

      <div className="flex justify-center mb-20 w-[90%] mx-auto">
        <div className="border-t-4 border-dashed border-[#313D6A] w-[60%] "></div>
      </div>

      {/* individual group sessions */}
      <div className="w-[90%] m-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
        {/* Left Half: Content */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#313D6A]">
            Learn Better with Pen Tutor
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-900">
            If you and your child are ready to take the next step in organizing
            his/her future plans and maximizing their learning potential,
            contact us for certified teachers to make your dreams come true.
          </p>
          <button className="cursor-pointer font-[600] bg-yellow-400 text-black px-6 py-2 rounded hover:text-white transition">
            Read More
          </button>
        </div>

        {/* Right Half: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={individualgroup}
            alt="Line Decoration"
            className="w-full h-[300px] object-cover max-w-sm rounded-[2rem] shadow-[10px_-10px_20px_rgba(0,0,0,0.1),10px_10px_20px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>

      {/* Small Group Sessions  */}
      <div className="bg-[#FEF8E6] mb-20">
        <div className="w-[90%] m-auto max-w-screen-xl py-16 flex flex-col md:flex-row items-center justify-center gap-10 ">
          {/* Left Half: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={individualgroup2}
              alt="Line Decoration"
              className="w-full h-[300px] object-cover max-w-sm rounded-[2rem] shadow-[10px_-10px_20px_rgba(0,0,0,0.1),10px_10px_20px_rgba(0,0,0,0.1)]"
            />
          </div>

          {/* Right Half: Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
            <h2 className="text-3xl font-bold text-[#313D6A]">
              Small Group Sessions
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-900">
              Pen Tutor is providing a greater opportunity for students to
              engage themselves in small group coaching sessions to enhance
              their communication skills, digital skills, and leadership skills.
            </p>
            <button className="cursor-pointer font-[600] bg-[#313D6A] hover:text-gray-200 px-6 py-2 rounded text-white transition">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* Academy sessions */}
      <div className="w-[90%] m-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
        {/* Left Half: Content */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#313D6A]">
            Academy Sessions
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-900">
            Our competitive academy Session environment promotes the passion for
            learning and increases the interest of students to their subjects,
            enhance problem-solving &critical thinking abilities.
          </p>
          <button className="cursor-pointer font-[600] bg-yellow-400 text-black px-6 py-2 rounded hover:text-white transition">
            Read More
          </button>
        </div>

        {/* Right Half: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={individualgroup3}
            alt="Line Decoration"
            className="w-full h-[300px] object-cover max-w-sm rounded-[2rem] shadow-[10px_-10px_20px_rgba(0,0,0,0.1),10px_10px_20px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Onlinetuotoringsinglepage;
