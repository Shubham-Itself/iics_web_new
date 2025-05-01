import { Link } from "react-router-dom";


 

const HowtoapplyArea = () => {

  const careers = [
    {
       
        step:'1. Fill the Online Application Form',
        information: (
            <>
              <Link to="/register" className="text-[#005BFF]">Click Here</Link> and complete the online application form. Make sure to enter accurate personal, academic, and contact details.
            </>
          ),
       
       

    },
    {
       
        step:'2.  Choose Your Program & Campus',
        information:'Select your preferred course and location.'
       
       

    },
    {
       
        step:'3. Upload Required Documents',
        information:'Upload  the following:',
        documentOne:'A government-issued ID (Aadhaar, Passport, etc.)',
        documentTwo:'10th & 12th Standard marksheet/ certificate',
        documentThree:'Portfolio (if applicable)',
        documentFour:'Passport-sized photo'
       
       

    },
   
    
    
    
    
  ]

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                  
                    <div className="my-[60px]">
                    <p className="text-[35px] font-semibold text-black mb-[30px] mobile:text-[20px]">Take the First Step Toward a Career That Inspires
                    </p>
                    <div className=" !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0 font-normal mobile:leading-[25px]">Joining the Indian Institute of Creative Skills means taking your first step toward a future in the media, entertainment & creative industry. Our application process is simple, transparent, and designed to help us discover passionate, driven individuals ready to make their mark.</h6>
                   
                </div>
                    </div>
                    <p className="text-[25px] text-black flex  gap-[10px] mobile:text-[16px] items-center">
                    <span className="fa fa-step-forward text-[#de4141]" aria-hidden="true"></span>
                        Step-by-Step Application Process</p>
                   
                    {
                        careers.map((career)=>(

                            <div className="event-list-items flex-col !items-start" style={{boxShadow:'inset 5px 5px 10px #a9a9aa77, inset -5px -5px 10px #ffffff7e'}}>
                                {/* <div>
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
                                </div> */}
                            <div className="event-content !w-full !basis-full">
                                <div className="content w-full">
                                    {/* <div className="date !px-[6px]">
                                        <h2>{event.dateDay}</h2>
                                        <span>{event.dateMonthYear}</span>
                                    </div> */}
                                    <div className="title-text w-full !max-w-full">
                                        <h4 className="text-[#005BFF] mobile:!text-[18px]">{career.step}</h4>
                                        <div className="flex flex-col  gap-[10px] mt-[20px] w-full">
                                        <p className="text-[18px] mobile:text-[16px]">{career.information}</p>
                                        {
                                            career.documentOne && <ul className="pl-[30px] mobile:text-[16px]">
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
                    }
                   
                   
                 
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md mt-[20px]">
            <h3 className="text-[25px] mobile:text-[20px] font-bold text-black flex items-center gap-2 mb-4">
              {/* <span className="text-[#de4141] fa fa-phone rotate-[90deg]" /> */}
              Submit the Application Form
            </h3>
            <p className="text-[16px] text-black mb-4 mobile:text-[14px]">
            Once all required documents have been uploaded and details filled in, submit the form to complete your application.
            You will receive a confirmation email and further instructions for the entrance process.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] text-black mobile:text-[14px]">
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
               

                <div className="bg-gray-50 p-6 rounded-xl shadow-md mt-[20px]">
                    <p className="text-[25px] font-bold text-black  mb-[10px] flex  gap-[10px]  items-center mobile:text-[20px]"><i className="fa fa-calendar text-[#de4141]" aria-hidden="true"></i> Important Dates</p>
                   
                    <ul className="list-disc pl-[40px] ">
                        <li className="font-semibold text-[18px] mobile:text-[16px] text-black mb-[5px]">Registration Start Date: <span className="font-normal">April 01, 2025</span></li>
                        <li className="font-semibold text-[18px] mobile:text-[16px] text-black mb-[5px]">Registration End Date: <span className="font-normal">April 20, 2025</span></li>
                       


                    </ul>

                  
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md mt-[20px]">
            <h3 className="text-[25px] font-bold text-black flex items-center gap-2 mb-4 mobile:text-[20px]">
              <span className="text-[#de4141] fa fa-phone rotate-[90deg] " />
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
    </>
  );
};

export default HowtoapplyArea;