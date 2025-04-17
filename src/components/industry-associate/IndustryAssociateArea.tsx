import { Link } from "react-router-dom";


 

const IndustryAssociateArea = () => {

  const careers = [
    {
       
        name:'Partnerships with Top Media Houses & Studios',
       description:'Work with some of the most respected names in the entertainment world. Our industry collaborations offer students a chance to experience the real workings of TV, Film, Digital, and OTT platforms.',
        
       

    },
    {
       
        name:'Mentorship from Industry Leaders',
       description:'Learn directly from industry veterans and leading professionals who have paved the way in filmmaking, gaming, broadcasting, media management, and more.',
        
       

    },
    {
       
        name:'Exclusive Internships & Placements',
       description:'Gain invaluable industry exposure through internships with renowned organizations. These experiences pave the way for career-defining opportunities.',
        
       

    },
    {
       
        name:'Industry Certifications',
       description:'Benefit from certifications that are recognized and respected by industry professionals, ensuring that your credentials stand out when entering the workforce.',
        
       

    },
 
   
  ]

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                  
                    <div className="my-[60px]">
                    <p className="text-[35px] font-bold text-black mb-[30px]">Industry Associations – Bridging Education with Real-World Impact</p>
                    <p>At IICS, we believe in the power of collaboration between academia and the industry. Our Industry Associations provide students with direct access to leading organizations, professionals, and thought leaders across media, entertainment, and creative industries. These partnerships not only enhance your learning experience but also open doors to countless opportunities for growth, employment, and entrepreneurship.
</p>
                    {/* <div className="section-title !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Here’s a glimpse of the exciting career opportunities across our programs:</h6>
                   
                </div> */}
                    </div>
                    <div className="my-[60px]">
                    <p className="text-[35px] font-bold text-black mb-[30px]">Strong Industry Ties, Real-World Learning</p>
                    <p>We understand the value of industry exposure in shaping well-rounded professionals. That’s why we’ve forged strong connections with top media houses, production studios, event agencies, gaming companies, and more. Through these associations, students have access to exclusive internships, live projects, mentorship, and career placements.
</p>
                    {/* <div className="section-title !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Here’s a glimpse of the exciting career opportunities across our programs:</h6>
                   
                </div> */}
                    </div>
                   <p>Key Industry Collaborations:</p>
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
                                            <p className=" text-[18px] text-black">{career.description}</p>
                                            {/* <p><span className="font-semibold">Course Duration (In Months): </span> {career.courseDuration}</p>
                                            
                                            <p><span className="font-semibold">Total Number of Seats: </span> {career.numberofSeat}</p>
                                            <p><span className="font-semibold">Course Location: </span> {career.courseLocation}</p>
                                            <p><span className="font-semibold">Annual Fee: </span> {career.fees}</p> */}
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
                   
                   <p>Building the Future of Media & Entertainment</p>
                  <p>Through our Industry Associations, IICS students gain a competitive edge by leveraging the resources, networks, and expertise of global industry leaders. By engaging in these partnerships, we ensure that our students don’t just learn theory but also experience the industry’s practical aspects, making them future-ready for dynamic careers in the media and entertainment sector.</p>
                   {/* <div className="event-list-items flex-col !items-start" style={{boxShadow:'inset 5px 5px 10px #a9a9aa77, inset -5px -5px 10px #ffffff7e'}}>
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
                                        <h4><Link to="/event-details" className="!text-[22px]">All students enrolled in our programs are guaranteed apprenticeship opportunities in their final semester — across domains like:</Link></h4>
                                        <div className="flex  gap-[20px] mt-[10px] w-full">
                                        <div className="p-[30px] border rounded-[20px]" style={{
  boxShadow: '-5px -5px 8px #ffffff7a, 5px 5px 8px #a9a9aa7a'
}}>
                                            <ul className=" text-[18px] text-black list-disc">
                                                <li>Film, TV & OTT</li>
                                                <li>Gaming & XR</li>
                                                <li>Sound & Audio</li>
                                                <li>Makeup & Prosthetics</li>
                                                <li>PR, Journalism & Brand Strategy</li>
                                                <li>Digital Marketing & Content Creation</li>
                                                <li>Live Events & Experiential Management</li>
                                            </ul>
                                            <p><span className="font-semibold">Course Duration (In Months): </span> {career.courseDuration}</p>
                                            
                                            <p><span className="font-semibold">Total Number of Seats: </span> {career.numberofSeat}</p>
                                            <p><span className="font-semibold">Course Location: </span> {career.courseLocation}</p>
                                            <p><span className="font-semibold">Annual Fee: </span> {career.fees}</p>
                                        </div>
                                        <div className="p-[30px] border rounded-[20px]" style={{
 boxShadow: '-5px -5px 8px #ffffff7a, 5px 5px 8px #a9a9aa7a'
}}>
                                            <p className="font-semibold text-[18px] text-black">Career Outcomes (Entrepreneurship)</p>
                                            <p>{career.entrepreneurship}</p>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div> */}
                   
                 
                </div>
                {/* <div>
                    <p className="text-[25px] font-bold text-[#005BFF] mt-[60px] mb-[30px] ">What’s Included in the Fees?</p>
                    <ul className="list-disc pl-[40px]">
                        <li className="font-bold text-[18px] text-black mb-[5px]"> <span className="font-normal">12 months of on-campus learning </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">6 months of live industry projects </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">6 months of paid internship</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Access to industry-standard labs & equipment</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Mentorship from top industry experts</span></li>


                    </ul>
                </div> */}
               

                {/* <div>
                    <p className="text-[25px] font-bold text-[#005BFF] mt-[60px] mb-[10px]">Payment Options</p>
                    <p className="text-[16px] text-black mb-[30px]">Our dedicated placement cell actively connects students with opportunities across:</p>
                    <ul className="list-disc pl-[40px]">
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Full Payment (5% discount applicable) </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"> <span className="font-normal">Semester-Wise Installments</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Monthly EMI Plans (through partner NBFCs)</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Media Agencies</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Event Firms</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Digital Brands</span></li>


                    </ul>

                    <p className="text-[16px] text-black mt-[30px]">
                   EMI starting as low as ₹4,999/month*</p>
                </div> */}

                {/* <div>
                    <p className="text-[25px] font-bold text-[#005BFF] mt-[60px] mb-[5px] ">Student Support Services
                    </p>
                    <p className="mb-[5px]">Our support extends beyond financial aid — we’re here to guide you through every step:</p>
                    <ul className="list-disc pl-[40px]">
                        <li className="font-bold text-[18px] text-black mb-[5px]"> <span className="font-normal">One-on-one Counseling Sessions </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Admission & Career Guidance</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Application Help Desk</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Mentorship Connect</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Mentorship from top industry experts</span></li>


                    </ul>
                </div> */}
            </div>
        </section>
    </>
  );
};

export default IndustryAssociateArea;