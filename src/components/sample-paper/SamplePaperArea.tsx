// import { Link } from "react-router-dom";


 

const SamplePaperArea = () => {
    return (
      <section className="event-list-section fix section-padding pt-0">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mt-16 mb-12">
            <h2 className="text-[35px] font-bold text-black mobile:text-[25px]">
              Sample Papers
            </h2>
          </div>
  
          {/* Sample Paper List */}
          <div className="mb-12">
            <p className="text-[25px] font-bold text-[#005BFF] mb-2 mobile:text-[20px]">
              Practice. Prepare. Perform.
            </p>
            <p className="text-[16px] font-semibold text-black mb-4">
              Available Sample Papers:
            </p>
            <ul className="pl-6 list-disc space-y-2">
              {[
                "Film & Production",
                "Hair, Makeup & Prosthetics",
                "Game Design & Development",
                "Music & Sound Design",
                "Digital Content Creation",
                "PR, Journalism & Media Communication",
                "Performing Arts & Media Management",
              ].map((title, index) => (
                <li key={index} className="text-[18px] mobile:text-[16px] font-semibold text-black">
                  {title}
                  <span className="font-normal text-[16px] ml-2">
                    –{" "}
                    <a
                      href="#"
                      className="text-[#005BFF] underline hover:text-blue-700 mobile:text-[16px]"
                    >
                      Download PDF
                    </a>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[15px] text-black mt-6">
              <span className="font-semibold">Note:</span> These are sample
              questions intended for practice. The actual entrance test may vary
              in structure and content.
            </p>
          </div>
  
          {/* Guidance Section */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-[25px] mobile:text-[20px] font-bold text-black flex items-center gap-2 mb-4">
              <span className="text-[#de4141] fa fa-phone rotate-[90deg]" />
              Need Guidance?
            </h3>
            <p className="text-[16px] text-black mb-4">
              If you need help selecting the right course or understanding the
              entrance process, our admissions counselors are here for you.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] text-black">
              <li>
                <strong>Email:</strong>{" "}
                <span className="font-normal">info@iicsindia.org</span>
              </li>
              <li>
                <strong>Call/WhatsApp:</strong>{" "}
                <span className="font-normal">+91-959-4949-959</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="tel:9594949959"
                className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-500 transition"
              >
                Book Counselling Session
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SamplePaperArea;