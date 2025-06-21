import individualgroup from "../assets/individualgroup.png";
import one from "../assets/11.jpg";
import onlineacdSubtract from "../assets/onlineacdSubtract.png";
import onlinesessionGroup from "../assets/onlinesessionGroup.png";
const Onlineindividualsession = () => {
  return (
    <div className="relative bg-[#FEFAEB] w-full py-10">
      <div className="max-w-screen-xl pb-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={individualgroup}
            alt="online acd session"
            className="w-full max-w-sm md:max-w-[100%] relative z-10"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-[#313D6A]  text-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Online Individual
          </h1>
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Group Sessions
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl md:text-center mx-auto w-[90%] mb-16">
        <p className="text-base md:text-lg leading-relaxed text-gray-900">
          Pen tutor is a platform providing all types of national and
          international educational facilities. In this modern era every day
          brings a new challenge for students to cope with. Pen tutor is the
          best guideline for every student engaged in any kind of study area. It
          is difficult to find the best online tutor for yourself. Pen tutor
          offer you trained and highly professional teachers to organize your
          workload.
        </p>
      </div>
      <div className="max-w-screen-xl md:text-center mx-auto w-[90%] mb-16">
        <h1 className="py-2 text-2xl md:text-3xl font-bold text-black mb-4">
          INDIVIDUAL COACHING
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-900">
          It is by nature that no two students are the same and hence they
          pursue different life goals. Every child needs guidance in his/her
          life to make the right decision since start. Pen tutor makes students
          able to make strategies to help them in their work and assignments.
          Students often face the teacher’s divided attention in classrooms.
          Sometimes students are shy to ask questions and engage in a collective
          environment. Pen Tutor Individual coaching is the best opportunity for
          students to learn without any barrier. Pen Tutor teachers give their
          100% attention to students to understand their problems.
        </p>
      </div>

      {/* Online acd session image */}
      <div className="w-[90%] m-auto flex justify-center items-center">
        <img
          src={one}
          alt="Online Academy Session"
          className="w-full max-w-screen-md rounded-4xl"
        />
      </div>
      <div className="w-[90%] m-auto flex flex-col items-start justify-between gap-8 py-20">
        {/* Left Section */}
        <div className="w-full text-center md:text-left">
          <div className="max-w-screen-xl mx-auto w-[90%]">
            <h1 className="py-2 text-2xl md:text-3xl font-bold text-black mb-4">
              Our Individual online Pen Tutor coaches focus on the following key
              areas to ensure student success.
            </h1>
            <ul className="text-base text-left md:text-lg leading-relaxed text-gray-900 space-y-4 list-disc pl-5">
              <li>
                Allowing students to set their list of goals and habits by
                developing a clear understanding of what they want from the
                future. This helps them to make better future decisions.
              </li>
              <li>
                Pen Tutor environment offers many advantages to the learner.
                This includes self-direction, active learning, executive
                functioning and self-regulatory skills. We ensure the active
                involvement of every student in the entire learning session,
                well-planed task orientation with achievable study goals.
              </li>
              <li>
                Maximum space is given to them to maximize their comfort and
                success. This fertilizes their work capabilities and enhance
                their vision making their mind more productive.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full flex justify-center items-start">
          <div className="max-w-screen-xl mx-auto w-[90%]">
            <ul className="text-base text-left md:text-lg leading-relaxed text-gray-900 space-y-4 list-disc pl-5">
              <li>
                Less distractive environment leads to creativity and command on
                subjects. Learn to prioritize the work plans and study hard to
                achieve learning goals. Being more organized with an effective
                tutor guide following a proper schedule is key to success.
              </li>
              <li>
                100 % attention of tutor and an interactive environment is an
                effective and successful way as needed increase self-advocacy
                skills.
              </li>
              <li>
                Students can not always solve complex study problems on their
                own. They always need the right tutor to get them through all
                these problems and guide them to the right path. Pen Tutor
                teachers are the best qualified and trained teachers to help
                your kids in their study problems and enhance their
                understanding of the subject they feel tough. Daily sessions,
                test schedules and regular feedbacks enhance their motivation.
                When students feel successful, they put more effort into their
                work and try harder happily and confidently. This program is
                designed for students to learn new skills, develop routines and
                eventually transform them into habits so they are able to
                execute themselves in right time.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onlineindividualsession;
