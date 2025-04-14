import { useState } from "react";

const FaqArea = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="gallery-section section-padding  fix">
        <div className="faq-wrapper style-5">
          <div className="container">
            <div className="section-title text-center">
              <h6>Frequently Asked Questions?</h6>
              <h2 className="!text-[25px] mb-[10px]">
                Everything You Need to Know About Joining IICS
              </h2>
              <p className="text-[16px]">
                We’ve put together a list of the most common questions students
                ask us — from eligibility and application to course structure
                and career support. If you have a question, you’ll likely find
                the answer here!
              </p>
            </div>
            <div className="row g-4">
              <p className="text-[20px] font-bold">General Questions</p>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                    <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(0)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. What is IICS?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 0 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-x-hidden !overflow-y-scroll transition-all duration-300 ease-in-out ${
                          openIndex === 0
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                       A. The Indian Institute of Creative Skills (IICS) is a
                        premier creative education institution affiliated with
                        NSDC Academy, operated by the Media & Entertainment
                        Skills Council (MESC), and supported by the Ministry of
                        Skill Development & Entrepreneurship (MSDE). We offer
                        industry-driven programs across media, entertainment,
                        and creative domains.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                  <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(1)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. Where are your campuses located?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 1 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === 1
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                       A. Currently, IICS has campuses in:
                        <ul className="list-disc pl-[30px]">
                            <li>Delhi</li>
                            <li>Bhopal (at Sage University)</li>
                            <li>Chandigarh (CDCL Campus)</li>
                        </ul>
                        <p> New campuses are coming soon in Kolkata and Bhubaneswar.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="row g-4 !mt-[20px]">
              <p className="text-[20px] font-bold ">Courses & Eligibility</p>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                  <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(3)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. What courses do you offer?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 3 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-x-hidden !overflow-y-scroll transition-all duration-300 ease-in-out ${
                          openIndex === 3
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                       A. We offer specialized programs in:
                        <ul className="list-disc pl-[30px]">
                            <li>Film & Production</li>
                            <li>Hair, Makeup & Prosthetics</li>
                            <li>3D Game Design
Advance Gaming and Extended Reality (XR) Innovations
</li>
<li>Digital Content Creation</li>
                            <li>Sound Recording & Sound Design</li>
                            <li>PR, Journalism & Media Communication
</li>
<li>Performing Arts & Media Management</li>
                            <li>Event Management</li>
                           
                        </ul>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                    <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(4)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. What are the eligibility criteria?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 4 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === 4
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                      A. Most courses require completion of 10+2 or equivalent. Some programs may require a portfolio or audition. Check our Eligibility Criteria page for course-specific details.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            

            </div>
            <div className="row g-4 !mt-[20px]">
              <p className="text-[20px] font-bold ">Admissions</p>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                    <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(5)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. How do I apply to IICS?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 5 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === 5
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                     A. Visit our How to Apply page and follow the step-by-step process — fill out the application form, upload documents, appear for the entrance exam, and attend a personal interview.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                    <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(6)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. Is there an entrance exam?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 6 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === 6
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                      A. Yes. The admission process includes an online entrance exam, followed by a portfolio review or audition (if applicable), and a personal interview.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                  <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(7)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. What documents are required during application?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 7 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden !overflow-y-scroll transition-all duration-300 ease-in-out ${
                          openIndex === 7
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                        A. You’ll need to upload:
                        <ul className="list-disc pl-[30px]">
                            <li>A government-issued ID</li>
                            <li>10th & 12th marksheets/certificates</li>
                            <li>Passport-sized photo
</li>
<li>Portfolio (if applicable)</li>
                            
                           
                        </ul>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            

            </div>
            <div className="row g-4 !mt-[20px]">
              <p className="text-[20px] font-bold ">Internships & Careers</p>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                    <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(8)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. Does IICS provide internship opportunities?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 8 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === 8
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                    A. Yes! Our unique 12+6+6 course model includes 6 months of hands-on industry projects followed by a 6-month paid internship, giving you real-world experience and exposure.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                    <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(9)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. Will I get placement support after completing the course?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 9 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === 9
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                    A. Absolutely. Our career development team, industry mentors, and strategic partnerships ensure students are well-placed in India and on international platforms.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
             
            

            </div>
            <div className="row g-4 !mt-[20px]">
              <p className="text-[20px] font-bold ">Fees & Financial Support</p>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                    <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(10)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. What is the fee structure?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 10 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === 10
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                     A. Course fees vary based on the program and campus. Please visit our Fees & Support page for details or speak to our admission counselors.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                    <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(11)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. Do you offer any financial aid or loan facilities?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 11 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === 11
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                   A. Yes. IICS offers financial support options, including easy education loan assistance through our partnered financial institutions. Our team can guide you through the loan application process to make education more accessible and stress-free. For more details, reach out to us.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
             
            

            </div>
            <div className="row g-4 !mt-[20px]">
              <p className="text-[20px] font-bold">Other Questions</p>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                    <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(12)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. How can I download the prospectus?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 12 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-x-hidden !overflow-y-scroll transition-all duration-300 ease-in-out ${
                          openIndex === 12
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                       A. Head to our Download Prospectus page and click the link to get your copy in PDF format.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="faq-items">
                  <div className="border rounded-2xl shadow p-4">
                      <button
                        onClick={() => toggle(13)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg"
                      >
                        <span>Q. Who do I contact for help with my application?</span>
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openIndex === 13 ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === 13
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        } text-gray-700`}
                      >
                       A.
                        <ul className="list-disc pl-[30px]">
                            <li><span className="font-bold">Email:</span>info@iicsindia.org</li>
                            <li><span className="font-bold"> Call/WhatsApp:</span>+91-959-4949-959</li>
                     
                        </ul>
                        <p>Or Book a Counselling Session</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;
