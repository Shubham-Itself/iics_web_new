import { Link } from "react-router-dom";


 

const StartupSupportArea = () => {

  const careers = [
    {
       
        name:'Incubation & Mentorship',
       description:' Get one-on-one guidance from top founders, investors, and industry mentors to refine your idea, build a business model, and avoid startup pitfalls.',
        
       

    },
    {
       
        name:'Workspace & Infrastructure',
       description:' Access creative labs, editing studios, production equipment, rehearsal spaces, and co-working hubs to kickstart operations.',
        
       

    },
    {
       
        name:'Pitching & Funding Opportunities',
       description:'Participate in curated pitch days and funding rounds in partnership with angel investors, government grants, and startup accelerators.',
        
       

    },
    {
       
        name:'Workshops & Legal Support',
       description:'Get support with company registration, IP rights, branding, and more through expert-led bootcamps and legal advisors.',
        
       

    },
    {
       
        name:'Collaborative Ecosystem',
       description:'Join a vibrant network of artists, developers, strategists, and business minds — your future team, partners, and collaborators.',
        
       

    },
   
  ]

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                  
                    <div className="my-[60px]">
                    <p className="text-[35px] font-bold text-black mb-[30px]">Startup Support – Launch Your Creative Venture with Confidence</p>
                    <p>At IICS, we believe innovation is just the beginning. For students with entrepreneurial ambitions, our Startup Support Program is designed to help transform your ideas into impactful ventures in the media and entertainment space.
Whether you're launching a production house, building a creative agency, or starting your own makeup brand or gaming studio — we’ve got you covered.
</p>
                    {/* <div className="section-title !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Here’s a glimpse of the exciting career opportunities across our programs:</h6>
                   
                </div> */}
                    </div>
                   <p>What We Offer:</p>
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
                   
                   <p>Startup Success is Not a Dream — It’s a Journey We Walk With You</p>
                  <p>No matter your discipline — be it Performing Arts, Gaming, Sound, Journalism, Events, or Makeup & Prosthetics — our Creative Incubator ensures your path from student to founder is smooth, supported, and impactful.</p>
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

export default StartupSupportArea;