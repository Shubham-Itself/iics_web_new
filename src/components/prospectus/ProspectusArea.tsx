import { Link } from "react-router-dom";


 

const ProspectusArea = () => {

//   const careers = [
//     {
       
//         step:'1. Fill the Online Application Form',
//         information:'Click Here (Redirect it to application form) and complete the online application form. Make sure to enter accurate personal, academic, and contact details.'
       
       

//     },
//     {
       
//         step:'2.  Choose Your Program & Campus',
//         information:'Select your preferred course and location.'
       
       

//     },
//     {
       
//         step:'3. Upload Required Documents',
//         information:'Upload  the following:',
//         documentOne:'A government-issued ID (Aadhaar, Passport, etc.)',
//         documentTwo:'10th & 12th Standard marksheet/ certificate',
//         documentThree:'Portfolio (if applicable)',
//         documentFour:'Passport-sized photo'
       
       

//     },
   
    
    
    
    
//   ]

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                  
                    <div className="my-[60px]">
                    <p className="text-[35px] font-semibold text-black mb-[30px]">IICS Prospectus
                    </p>
                    <div className="section-title !mb-[15px] ">
                    <h6 className="wow fadeInUp !mb-0">Your Creative Future Begins Here</h6>
                   
                </div>
                    <div className=" !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Explore everything you need to know about IICS — from our cutting-edge courses and world-class mentors to our campus locations and career-focused training approach. The IICS Prospectus is your complete guide to joining one of India’s most forward-thinking institutes in the Media & Entertainment industry.</h6>
                    <p className="text-[18px] font-bold mt-[10px]">Download Now</p>
                    <p className="text-[16px] mb-[10px]">Click the button below to download the IICS Prospectus (PDF).</p>
                    <div className="flex gap-[10px] items-center">Delhi Campus: <div className="header-button min-l:!hidden">
                    <Link
                      to="/register"
                      className="theme-btn yellow-btn !px-[16px] !py-[12px] "
                    >
                      Download Prospectus
                    </Link>
                  </div></div>
                    
                   
                </div>
                    </div>
                    {/* <p className="text-[25px] text-black flex  gap-[10px]">
                    <span className="fa fa-step-forward text-[#de4141]" aria-hidden="true"></span>
                        Step-by-Step Application Process</p> */}
                   
                    {/* {
                        careers.map((career)=>(

                            <div className="event-list-items flex-col !items-start" style={{boxShadow:'inset 5px 5px 10px #a9a9aa77, inset -5px -5px 10px #ffffff7e'}}>
                                <div>
                                <div className="flex items-center py-3">
    <div className="px-1">
      <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
    </div>
    <div className="px-1">
      <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
    </div>
    <div className="px-1">
      <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
    </div>
  </div>
                                </div>
                            <div className="event-content !w-full !basis-full">
                                <div className="content w-full">
                                    <div className="date !px-[6px]">
                                        <h2>{event.dateDay}</h2>
                                        <span>{event.dateMonthYear}</span>
                                    </div>
                                    <div className="title-text w-full !max-w-full">
                                        <h4><Link to="/event-details">{career.step}</Link></h4>
                                        <div className="flex flex-col  gap-[10px] mt-[20px] w-full">
                                        <p className="text-[18px]">{career.information}</p>
                                        {
                                            career.documentOne && <ul className="pl-[30px]">
                                                <li className="list-disc">{career.documentOne}</li>
                                                <li className="list-disc">{career.documentTwo}</li>
                                                <li className="list-disc">{career.documentThree}</li>
                                                <li className="list-disc">{career.documentFour}</li>

                                            </ul>
                                        }
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        ))
                    } */}
                   
                   
                 
                </div>
                {/* <div>
                    <p className="text-[25px] font-bold text-black mt-[60px] mb-[20px]">Online Entrance Exam</p>
                 
                        <p className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">
                        Once your application is submitted, eligible candidates will receive login credentials to take the IICS Online Entrance Test.
                            </span></p>
                            <ul className="list-disc pl-[40px]">
                        <li className="font-semibold text-[18px] text-black mb-[5px]"><span className="font-normal">Tailored to your program</span></li>
                        <li className="font-semibold text-[18px] text-black mb-[5px]"><span className="font-normal">Tests creativity, aptitude, general awareness & industry interest</span></li>
                        <li className="font-semibold text-[18px] text-black mb-[5px]"><span className="font-normal">Conducted remotely and monitored</span></li>

                       


                    </ul>
                </div> */}

                {/* <div>
                    <p className="text-[25px] font-bold text-black mt-[60px] mb-[10px] flex  gap-[10px]">Portfolio Review / Audition</p>
                    <p className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">
                    Depending on your selected course:
                            </span></p>
                   
                    <ul className="list-disc pl-[40px]">
                        <li className="font-semibold text-[18px] text-black mb-[5px]">Creative Programs: <span className="font-normal">Your portfolio shall be reviewed to assess your artistic vision, originality, and skill.</span></li>
                        <li className="font-semibold text-[18px] text-black mb-[5px]">Performance Programs:<span className="font-normal">You’ll be invited to submit or perform an audition task to showcase your talent.</span></li>
                       


                    </ul>

                  
                </div> */}
                {/* <div>
                    <p className="text-[25px] font-bold text-black mt-[60px] mb-[10px] flex  gap-[10px]">Personal Interview</p>
                    <p className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">
                    Shortlisted applicants will go through a one-on-one interview round (online or in-person), where our mentors will explore:
                            </span></p>
                   
                    <ul className="list-disc pl-[40px]">
                        <li className="font-semibold text-[18px] text-black mb-[5px]"><span className="font-normal">Your motivation, career goals, and creative background</span></li>
                        <li className="font-semibold text-[18px] text-black mb-[5px]"><span className="font-normal">Alignment with the course and industry expectations</span></li>
                       


                    </ul>

                  
                </div> */}
                {/* <div>
                    <p className="text-[25px] font-bold text-black mt-[60px] mb-[10px] flex  gap-[10px]">Final Evaluation & Selection</p>
                    <p className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">
                    Your performance across all stages — entrance test, portfolio/audition, and interview — is considered for final selection. <br />
                    Selected students will receive a formal Offer Letter with details on admission, fee, and joining formalities.
                            </span></p>
                   
                    <ul className="list-disc pl-[40px]">
                        <li className="font-semibold text-[18px] text-black mb-[5px]"><span className="font-normal">Your motivation, career goals, and creative background</span></li>
                        <li className="font-semibold text-[18px] text-black mb-[5px]"><span className="font-normal">Alignment with the course and industry expectations</span></li>
                       


                    </ul>

                  
                </div> */}
                {/* <div>
                    <p className="text-[25px] font-bold text-black mt-[60px] mb-[10px] flex  gap-[10px]"><i className="fa fa-calendar text-[#de4141]" aria-hidden="true"></i> Key Dates:</p>
                   
                    <ul className="list-disc pl-[40px]">
                        <li className="font-semibold text-[18px] text-black mb-[5px]">Entrance Exam: <span className="font-normal">April 25, 2025</span></li>
                        <li className="font-semibold text-[18px] text-black mb-[5px]">Personal Interviews: <span className="font-normal">May 1, 2025</span></li>
                        <li className="font-semibold text-[18px] text-black mb-[5px]">Course Launch: <span className="font-normal">May 20, 2025</span></li>
                       


                    </ul>

                  
                </div> */}
                <div>
                    <p className="text-[25px] font-bold text-black mt-[60px] mb-[20px] flex  gap-[10px]"><span className="text-[#de4141] fa fa-phone" aria-hidden="true"></span>Still have questions?</p>
                 
                        <p className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">
                        Have questions? Our admissions counselors are here to guide you.
                            </span></p>
                            <ul className="list-disc pl-[40px]">
                        <li className="font-semibold text-[18px] text-black mb-[5px]">Email: <span className="font-normal"> info@iicsindia.org</span></li>
                        <li className="font-semibold text-[18px] text-black mb-[5px]">Call/WhatsApp: <span className="font-normal">+91-959-4949-959</span></li>
                       


                    </ul>
                    <p className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">
                        Or <br />
                        Book Counselling Session
                            </span></p>
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default ProspectusArea;