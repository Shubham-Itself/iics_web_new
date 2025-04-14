import { Link } from "react-router-dom";


 

const PublicNotesArea = () => {

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
                    <p className="text-[35px] font-bold text-black mb-[30px]">Public Notices</p>
                    <div className="section-title !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Stay updated with the latest announcements, policies, and official information from IICS.</h6>
                   
                </div>
                    </div>
                    <p className="text-[20px] font-semibold">Latest Notices</p>
                   
         

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
                                        <h4><Link to="/event-details" className="!text-[22px]">Notice for Commencement  of Registration Process at Indian Institute of Creative Skills, Delhi</Link></h4>
                                        <div className="flex  gap-[20px] mt-[10px] w-full">
                                        <div className="p-[30px] border rounded-[20px]" style={{
  boxShadow: '-5px -5px 8px #ffffff7a, 5px 5px 8px #a9a9aa7a'
}}>
                                          
                                            <p><span className="font-semibold">Date: </span> 11.04.2025</p>
                                            
                                            <p><span className="font-semibold">Download/View </span>Download Here</p>
                                           
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
                 
               
                   
                   <p className="mt-[30px] font-semibold text-[20px]">Note:</p>
                   <ul className="list-disc pl-[30px]">
                    <li>All notices are released by the <span className="font-bold">IICS Administrative Office.</span></li>
                    <li>For any clarification, contact us at: info@iicsindia.org</li>
                   </ul>
                 
                </div>
               
            </div>
        </section>
    </>
  );
};

export default PublicNotesArea;