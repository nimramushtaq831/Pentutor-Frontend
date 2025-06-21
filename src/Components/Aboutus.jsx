import MaskGroup from "../assets/Mask Group.png";
import MaskGroup2 from "../assets/Mask Group2.png";
import MaskGroup3 from "../assets/Mask Group3.png";
const Aboutus = () => {
  return (
    <>
      <div className=" w-full bg-white">
        <div className="text-center max-w-4xl mx-auto text-sm md:text-xl lg:text-2xl text-[#F5BB07] font-bold pt-10 pb-6 md:pb-10 px-4">
          <h1>"PEN TUTOR COVERS THE GAP BETWEEN"</h1>
          <h1>STUDENT AND HIS/HER ACADEMIC SUCCESS"</h1>
        </div>
        <div className="relative w-full h-auto mb-10 lg:mb-24">
          <img
            src={MaskGroup}
            alt="Mask"
            className="w-full h-auto object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#7A7A7A] opacity-50"></div>
        </div>
        <div className="text-center max-w-4xl mx-auto text-sm md:text-xl lg:text-2xl text-[#F5BB07] font-bold pb-6 md:pb-10 px-4">
          <h1>"PEN TUTOR Methodology"PEN TUTOR Methodology</h1>
        </div>
        <div className="relative w-full h-auto mb-10 lg:mb-24">
          <img
            src={MaskGroup2}
            alt="Mask"
            className="w-full h-auto object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#7A7A7A] opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 py-10 sm:px-6 md:px-10 text-white">
            <p className="text-[8px] sm:text-base md:text-[16px] lg:text-xl lg:pb-6 font-medium leading-relaxed  ">
              Our motto is "learning with concept". We ensure the needs of
              students. Our tutors are highly qualified and trained. They assess
              student's weaknesses and strengths properly, design their
              effective methodology accordingly, and are committed to student’s
              improvement and success in achieving his/her targets.
            </p>
            <p className="text-[8px] sm:text-base md:text-[16px] lg:text-xl  leading-relaxed ">
              "WE MAKE LEARNING INTERESTING, QUICK AND EASY"
            </p>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto text-sm md:text-xl lg:text-2xl text-[#F5BB07] font-bold pb-6 md:pb-10 px-4">
          <h1>Our wide spectrum of services</h1>
        </div>
        <div className="relative w-full h-auto mb-10 ">
          <img
            src={MaskGroup3}
            alt="Mask"
            className="w-full h-auto object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#7A7A7A] opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 py-10 sm:px-6 md:px-10 text-white">
            <p className="text-[8px] sm:text-base md:text-[16px] lg:text-xl lg:pb-6 font-medium leading-relaxed  ">
              Our tutors are specialized in their services for all types of
              courses at all levels. We provide the best tutors for all classes
              and all subjects. Preparation of all variety of national and
              international tests and exams is covered under the cap of Pen
              Tutor. Professional skill development sessions are also arranged
              by Pen Tutor. Our services are available on-campus and online.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
