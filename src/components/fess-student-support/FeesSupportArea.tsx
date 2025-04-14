import { Link } from "react-router-dom";


 

const FeesSupportArea = () => {

  const careers = [
    {
       
        name:'1. Performing Arts & Media Management',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
        numberofSeat:'20',
        courseLocation:'Lajpat Nagar, New Delhi',
        fees:'6,00,000 Rs'
       

    },
    {
       name:'2. Hair, Makeup & Prosthetics',
        courseDuration:'1 Year (6 Months Learning + 3 Months Industry Experience + 3 Months Paid Internship)',
        numberofSeat:'15',
        courseLocation:'Lajpat Nagar, New Delhi',
        fees:'6,00,000 Rs'
     
        
    },
    {
        name:'3. Sound Recording & Sound Design',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
        numberofSeat:'20',
        courseLocation:'Lajpat Nagar, New Delhi',
        fees:'6,00,000 Rs'
        
    },
    {
        name:'4. 3D Game Art',
        courseDuration:'2 Years (12 months Game Art Foundation + 6 months Game Art Specialization + 6 months Paid Internship)',
        numberofSeat:'25',
        courseLocation:'Lajpat Nagar, New Delhi',
        fees:'6,00,000 Rs'
        
    },
    {
        name:'5. Advanced Gaming & XR Innovations',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
        numberofSeat:'25',
        courseLocation:'Lajpat Nagar, New Delhi',
        fees:'6,00,000 Rs'
        
    },
    {
        name:'6. Journalism, PR, Image Strategization & Branding',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
        numberofSeat:'20',
        courseLocation:'Lajpat Nagar, New Delhi',
        fees:'6,00,000 Rs'
        
    },
    {
        name:'7. Events & Experiential Management',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
        numberofSeat:'30',
        courseLocation:'Lajpat Nagar, New Delhi',
        fees:'6,00,000 Rs'
        
    },
    {
        name:'8. Digital Management & Content Creation',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
        numberofSeat:'20',
        courseLocation:'Lajpat Nagar, New Delhi',
        fees:'6,00,000 Rs'
        
    },
  ]

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                  
                    <div className="my-[60px]">
                    <p className="text-[35px] font-bold text-black mb-[30px]">Course Fees</p>
                    {/* <div className="section-title !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Here’s a glimpse of the exciting career opportunities across our programs:</h6>
                   
                </div> */}
                    </div>
                   
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
                                        <h4><Link to="/event-details" className="!text-[22px]">{career.name}</Link></h4>
                                        <div className="flex  gap-[20px] mt-[10px] w-full">
                                        <div className="p-[30px] border rounded-[20px]" style={{
  boxShadow: '-5px -5px 8px #ffffff7a, 5px 5px 8px #a9a9aa7a'
}}>
                                            <p className="font-semibold text-[18px] text-black">Course Structure</p>
                                            <p><span className="font-semibold">Course Duration (In Months): </span> {career.courseDuration}</p>
                                            
                                            <p><span className="font-semibold">Total Number of Seats: </span> {career.numberofSeat}</p>
                                            <p><span className="font-semibold">Course Location: </span> {career.courseLocation}</p>
                                            <p><span className="font-semibold">Annual Fee: </span> {career.fees}</p>
                                        </div>
                                        {/* <div className="p-[30px] border rounded-[20px]" style={{
 boxShadow: '-5px -5px 8px #ffffff7a, 5px 5px 8px #a9a9aa7a'
}}>
                                            <p className="font-semibold text-[18px] text-black">Career Outcomes (Entrepreneurship)</p>
                                            <p>{career.entrepreneurship}</p>
                                        </div> */}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        ))
                    }
                   
                   
                 
                </div>
                <div>
                    <p className="text-[25px] font-bold text-[#005BFF] mt-[60px] mb-[30px] ">What’s Included in the Fees?</p>
                    <ul className="list-disc pl-[40px]">
                        <li className="font-bold text-[18px] text-black mb-[5px]"> <span className="font-normal">12 months of on-campus learning </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">6 months of live industry projects </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">6 months of paid internship</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Access to industry-standard labs & equipment</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Mentorship from top industry experts</span></li>


                    </ul>
                </div>
               

                <div>
                    <p className="text-[25px] font-bold text-[#005BFF] mt-[60px] mb-[10px]">Payment Options</p>
                    {/* <p className="text-[16px] text-black mb-[30px]">Our dedicated placement cell actively connects students with opportunities across:</p> */}
                    <ul className="list-disc pl-[40px]">
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Full Payment (5% discount applicable) </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"> <span className="font-normal">Semester-Wise Installments</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Monthly EMI Plans (through partner NBFCs)</span></li>
                        {/* <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Media Agencies</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Event Firms</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Digital Brands</span></li> */}


                    </ul>

                    <p className="text-[16px] text-black mt-[30px]">
                   EMI starting as low as ₹4,999/month*</p>
                </div>

                <div>
                    <p className="text-[25px] font-bold text-[#005BFF] mt-[60px] mb-[5px] ">Student Support Services
                    </p>
                    <p className="mb-[5px]">Our support extends beyond financial aid — we’re here to guide you through every step:</p>
                    <ul className="list-disc pl-[40px]">
                        <li className="font-bold text-[18px] text-black mb-[5px]"> <span className="font-normal">One-on-one Counseling Sessions </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Admission & Career Guidance</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Application Help Desk</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Mentorship Connect</span></li>
                        {/* <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Mentorship from top industry experts</span></li> */}


                    </ul>
                </div>
            </div>
        </section>
    </>
  );
};

export default FeesSupportArea;