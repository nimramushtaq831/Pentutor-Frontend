import smallgroup from "../assets/SmallGroupsessions.png";
import page from "../assets/page.png";
import Subtract from "../assets/Subtract.png";
import Subtract1 from "../assets/Subtract 1.png";
import Subtract3 from "../assets/Subtract 3.png";
import Subtract4 from "../assets/Subtract4.png";
import Group from "../assets/Group 158.png";
const Smallgroupsession = () => {
  return (
    <>
      <div className="relative bg-[#F5F5F8] w-full">
        {/* First ellipse */}
        <div className="absolute top-90 sm:top-24 md:top-32 lg:top-40 ">
          <img
            className="w-[40px] md:w-[80px] h-[90] "
            src={Subtract}
            alt="Ellipse"
          />
        </div>
        {/* Second ellipse */}
        {/* Image Container */}
        <div className="absolute right-0 top-[30%] md:top-[30%] w-auto max-w-[60px] sm:max-w-[250px] md:max-w-[200px] lg:max-w-[350px]">
          <img
            src={Subtract4}
            alt="Foreground"
            className="relative w-full h-auto z-0  md:max-w-[80px]"
          />
        </div>
        {/* Third ellipse */}
        <div className="absolute left-0 top-[86%] md:top-[60%] w-auto max-w-[60px] sm:max-w-[100px] md:max-w-[100px] lg:max-w-[250px]">
          <img
            src={Group}
            alt="Foreground"
            className="relative w-full h-auto z-0 md:max-w-[80px]"
          />
        </div>
        {/* Fourth Elipse */}

        <div className="max-w-screen-xl mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center  md:text-center text-[#313D6A] space-y-4">
            <h1 className="text-4xl sm:text-4xl md:text-6xl  font-bold leading-tight">
              Online Small
            </h1>
            <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Group Sessions
            </h1>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 relative">
            {/* Background image behind */}
            <img
              src={Subtract1}
              alt="Subtract1"
              className="absolute w-2/3 max-w-[250px] sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-md z-0 -right-2 "
            />

            {/* Foreground image */}
            <img
              src={smallgroup}
              alt="Small Group Session"
              className="w-full max-w-md md:max-w-lg relative z-10"
            />
          </div>
        </div>
        {/* Small Group and Coaching Session */}
        <div className="max-w-screen-xl mx-auto w-[90%] mb-16">
          <h1 className="py-2 text-2xl md:text-3xl font-bold text-black mb-4">
            SMALL GROUP COACHING SESSION
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-900">
            Pen Tutor is providing a greater opportunity for students to engage
            themselves in small group coaching sessions to enhance their study
            skills, critical thinking abilities, and self-directed learning. Pen
            Tutor arranges small group coaching sessions that help students do
            what is needed to move closer to their goals. Our sessions enhance
            academic skill development and improve communication skills. Pen
            Tutor's aim is to facilitate students with a better learning
            platform to engage in a challenging environment and uplift their
            dream of learning.
          </p>
        </div>

        {/* Unique Stratrigies */}
        <div className="max-w-screen-xl mx-auto w-[90%]">
          <h1 className="text-2xl md:text-3xl font-bold text-black text-center mb-10">
            PEN TUTOR SMALL COACHING SESSIONS UNIQUE STRATEGIES
          </h1>
        </div>

        <div className="max-w-screen-xl mx-auto w-[90%]">
          <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-x-6">
            {/* Text Section */}
            <div className="w-full md:w-1/3">
              <ul className="text-base text-left md:text-lg leading-relaxed text-gray-900 space-y-4 list-disc pl-5">
                <li>
                  Pen Tutor's small group coaching sessions create a flexible
                  yet challenging environment that helps students grow both
                  individually and collectively to get the maximum out of
                  themselves.
                </li>
                <li>
                  Our tutors foster a competitive atmosphere and guide students
                  to stay committed by creating structured and manageable work
                  outlines tailored to their goals.
                </li>
                <li>
                  These sessions also improve student engagement by boosting
                  teamwork, concept transfer, and skill development. They help
                  students build self-motivation, explore critical issues, and
                  ultimately strengthen their knowledge and thinking abilities.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 ">
              <img
                src={page}
                alt="Page"
                className="w-full max-w-md md:max-w-[100%]"
              />
            </div>
          </div>
          <div className="w-full mb-10">
            <ul className="text-base text-left md:text-lg leading-relaxed text-gray-900 space-y-4 list-disc pl-5">
              <li>
                When all the students follow a precise schedule, it keeps them
                committed to their work and prevents them from leaving tasks
                incomplete. Pen Tutor teachers are trained to guide students
                through every situation, leading them toward the right path. Our
                small group coaching helps students manage emotions caused by
                daily stress and the challenges of college life, using effective
                tools for stress management and emotional regulation.
              </li>
              <li>
                Executive functioning, self-determination, the ability to learn
                new skills, and improved academic performance are the hallmarks
                of Pen Tutor’s small group coaching sessions. Our weekly
                assessment tests support students' growth in managing academic,
                social, and emotional aspects of their lives.
              </li>
              <li>
                Our coaching sessions ensure active learner involvement
                throughout the study process, providing well-planned task
                orientation with specific, achievable goals and objectives
                within a set time frame.
              </li>
            </ul>
          </div>

          <div className="w-full text-base md:text-lg text-gray-900 leading-relaxed py-10">
            <h1 className="py-2 text-center text-2xl md:text-3xl font-bold text-black mb-4">
              SMALL GROUP COACHING SESSION
            </h1>
            <p>
              We are providing exactly what your child needs. Our certified
              staff is equipped with all the essential teaching techniques to
              make your child successive in his/her academic career. We offer
              you the most suitable economic fee packages to let your child be a
              part of Pen Tutor's great academic environment.
            </p>
            <p className="text-center">
              We provide all what your child needs to be successful in his/her
              academic future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Smallgroupsession;
