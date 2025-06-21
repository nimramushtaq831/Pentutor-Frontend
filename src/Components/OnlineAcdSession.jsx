import Onlineacdsession from "../assets/Onlineacdsession.png";
import Onlineacdsessions from "../assets/Onlineacdsessions.png";
import onlineacdSubtract from "../assets/onlineacdSubtract.png";
import onlinesessionGroup from "../assets/onlinesessionGroup.png";

const OnlineAcdSession = () => {
  return (
    <div className="relative bg-[#FEFAEB] w-full py-10">
     
    
      <div className="max-w-screen-xl pb-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={Onlineacdsession}
            alt="online acd session"
            className="w-full max-w-sm md:max-w-[100%] relative z-10"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-[#313D6A]  text-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Online Academy
          </h1>
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Sessions
          </h1>
        </div>
      </div>

      {/* Academy session */}
      <div className="max-w-screen-xl md:text-center mx-auto w-[90%] mb-16">
        <h1 className="py-2 text-2xl md:text-3xl font-bold text-black mb-4">
          ACADEMY SESSIONS
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-900">
          Pen Tutor is a platform providing education in all types of modes to
          make quality education accessible to every child. Pen Tutor arrange
          highly professional and engaging Online Academy Sessions. These
          academy sessions fulfill the basic study needs of every student. Our.
          We focus on the problem of each student. Pen tutor aim is to
          facilitate the students with a better learning platform to engage the
          students in a challenging atmosphere to give a boost to the efforts
          towards their dreams.
        </p>
      </div>
      {/* Pentutor unique stratrigies */}
      <div className="max-w-screen-xl  mx-auto w-[90%] mb-10">
        <h1 className="py-2 text-2xl md:text-3xl font-bold text-black mb-4">
          PEN TUTOR UNIQUE STRATEGY OF ONLINE ACADEMY SESSIONS
        </h1>
        <ul className="text-base text-left md:text-lg leading-relaxed text-gray-900 space-y-4 list-disc pl-5">
          <li>
            Pen Tutor Online Academy session characteristics are engaging
            environment, challenging the atmosphere, provoking knowledge, skill
            development and self-determination.
          </li>
          <li>
            Pen Tutor environment offers many advantages to the learner. This
            includes self-direction, active learning, executive functioning and
            self-regulatory skills. We ensure the active involvement of every
            student in the entire learning session, well-planed task orientation
            with achievable study goals.
          </li>
          <li>
            Our well organized online academy sessions increase
            self-development, self-motivation, investigation of issues, the
            curiosity of knowledge, critical thinking abilities, and time
          </li>
          <li>
            management skills in students. Our certified staff able the students
            to test their thinking, deep learning skills, achieve higher-order
            activities like the investigation of issues, evaluation of problems
            and creative learning methods.
          </li>
        </ul>
      </div>
      {/* Online acd session image */}
      <div className="w-full flex justify-center items-center">
        <img
          src={Onlineacdsessions}
          alt="Online Academy Session"
          className="w-full max-w-screen-md"
        />
      </div>
      <div className="max-w-screen-xl  mx-auto w-[80%] mb-10">
        <ul className="text-base text-left md:text-lg leading-relaxed text-gray-900 space-y-4 list-disc pl-5">
          <li>
            Our academy’s precise schedule, test schedules, weekly assessments
            and feedbacks, regular and organize work hours to ensure the
            progress of students. Pen Tutor coaches are enlisted with
            multidisciplinary abilities in all study fields to fulfil the
            learning needs of students.
          </li>
          <li>
            Member of entire class often experiences a sense of belongingness
            which empowers to make positive changes. It Adds to the installation
            of ambition and self-advocacy that can be gained seeing from similar
            students making positive changes.
          </li>
          <li>
            Online academy sessions are more engaging and more profitable. A
            competitive and challenging environment makes the student improve
            themselves in real terms.
          </li>
          <li>
            ï‚· Our discussion base studies make students learn innovative
            learning methods and boost up their creativity. Academy sessions are
            profitable in economic terms and enlist you with a number of skills.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OnlineAcdSession;
