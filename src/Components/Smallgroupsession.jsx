import smallgroup from "../assets/SmallGroupsessions.png";
import page from "../assets/page.png";

const Smallgroupsession = () => {
  return (
    <>
      <div className="relative bg-[#F5F5F8] w-full">
        
        <div className="max-w-screen-xl mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-center text-[#313D6A] ">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Online Small
            </h1>
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Group Sessions
            </h1>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 relative">

            {/* Foreground image */}
            <img
              src={smallgroup}
              alt="Small Group Session"
              className="w-full max-w-md md:max-w-lg relative z-10"
            />
          </div>
        </div>

        {/* Small Group and Coaching Session */}
        <div className="max-w-screen-xl mx-auto w-[90%] mb-6">
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
        <div className="max-w-screen-xl mx-auto w-[90%] ">
          <h1 className="text-2xl md:text-3xl font-bold text-black text-center py-6">
            PEN TUTOR SMALL COACHING SESSIONS UNIQUE STRATEGIES
          </h1>
        </div>

        <div className="max-w-screen-xl mx-auto w-[90%]">
          <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-x-6">
            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <ul className="text-base md:text-lg leading-relaxed text-gray-900 font-medium space-y-4 list-disc pl-5">
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
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={page}
                alt="Page"
                className="w-full max-w-md md:max-w-md"
              />
            </div>
          </div>

          <div className="w-full mt-8">
            <ul className="text-base md:text-lg leading-relaxed text-gray-900 font-medium space-y-4 list-disc pl-5">
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

          <div className="w-full text-base md:text-base text-gray-900 leading-relaxed py-10 px-2">
            <h1 className="py-2 text-center text-2xl md:text-2xl font-bold text-black mb-4">
              SMALL GROUP COACHING SESSION
            </h1>
            <p className="text-center text-base md:text-lg leading-relaxed text-gray-900 font-medium space-y-4 list-disc pl-5">
              We are providing exactly what your child needs. Our certified
              staff is equipped with all the essential teaching techniques to
              make your child successive in his/her academic career. We offer
              you the most suitable economic fee packages to let your child be a
              part of Pen Tutor's great academic environment.We provide all what your child needs to be successful in his/her
              academic future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Smallgroupsession;
