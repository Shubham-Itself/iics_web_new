// import { Link } from "react-router-dom";


 

const SamplePaperArea = () => {

//   const careers = [
//     {
       
//         name:'1. Performing Arts & Media Management',
//         degreeProgram:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
//         certificateProgram:'Open to all, aspiring actors, theatre enthusiasts, media professionals, and graduates from related fields.',
//         outcome:'Candidates specializing in Acting will have the opportunity to showcase their work (videos, audio, etc.) to relevant casting agencies and studios while Students specializing in Media Management will have the opportunity to work with media houses and film/TV/OTT platforms, leading to future employment and entrepreneurship opportunities.',
     
       

//     },
//     {
//        name:'2. Hair, Makeup & Prosthetics',
//        degreeProgram:'12th Pass from a recognized Board with an interest in makeup, hairstyling, and prosthetics.',
//         certificateProgram:'Open to makeup artists, hairstylists, fashion professionals, beauty influencers, and graduates from related disciplines.',
//         outcome:'Candidates will work on a full-length film, fashion show, or commercial project.',
     
     
        
//     },
//     {
//         name:'3. Sound Recording & Sound Design',
//         degreeProgram:'12th Pass from a recognized Board with an interest in sound engineering and design.',
//         certificateProgram:'Open to B.Tech, B.Sc. graduates in Sound Engineering or related disciplines, music producers, audio technicians, and professionals in the music and film industry.',
//         preferred:'Students with Science.',
//         outcome:'The course will equip students to become proficient sound editors/recordists/ designers/engineers as per industry standard. The field is expansive and the course will facilitate students to be expert professionals across the globe.',
     
        
//     },
//     {
//         name:'4. 3D Game Art',
//         degreeProgram:'12th Pass from a recognized Board with an interest in 3D modeling and game design.',
//         certificateProgram:'Open to B.Sc., BFA, B.Tech graduates in Animation, Game Art, or related fields, digital artists, gaming professionals, and designers looking to enhance their 3D skills.',
//         outcome:'Candidates will contribute to a real-world game development project, creating 3D assets for a published video game or immersive VR experience.',
     
        
//     },
//     {
//         name:'5. Advanced Gaming & XR Innovations',
//         degreeProgram:'12th Pass from a recognized board with an interest in gaming, VR, and AR technologies.',
//         certificateProgram:'Open to B.Tech, B.Sc., BCA graduates in Game Development, XR, or related fields, AR/VR developers, designers, and gaming professionals.',
//         outcome:'The candidate will work on live projects in Video Game Development, Extended Reality.',
     
        
//     },
//     {
//         name:'6. Journalism, PR, Image Strategization & Branding',
//         degreeProgram:'12th Pass from a recognized Board with an interest in journalism, public relations, and brand communication.',
//         certificateProgram:'Open to Mass Communication, BBA, and MBA graduates, PR professionals, journalists, media strategists, and corporate communication executives.',
//         outcome:'Candidates will get a chance to report for a media house, work on a brand’s PR campaign, or contribute to a digital publication',
     
        
//     },
//     {
//         name:'7. Events & Experiential Management',
//         degreeProgram:'12th Pass from a recognized Board with an interest in event planning and experiential marketing.',
//         certificateProgram:'Open to BBA, MBA graduates, event planners, marketing professionals, hospitality managers, and individuals passionate about experiential events.',
//         outcome:'Candidates will plan and execute a large-scale live event, corporate conference, or brand activation, handling real-time logistics, sponsorships, and audience engagement.',
     
        
//     },
//     {
//         name:'8. Digital Management & Content Creation',
//         degreeProgram:'12th Pass from a recognized Board with an interest in digital media, content creation, and online branding.',
//         certificateProgram:'Open to BBA, MBA, Mass Communication, and Marketing graduates, content creators, social media strategists, influencers, and digital marketers.',
//         outcome:'Create powerful content for live brand and influencer projects, master digital tools, and build a portfolio tailored for real-world success.',
     
        
//     },
//   ]

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                  
                    <div className="my-[60px]">
                    <p className="text-[35px] font-bold text-black mb-[30px]">Sample Papers</p>
                    {/* <div className="section-title !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Here’s a glimpse of the exciting career opportunities across our programs:</h6>
                   
                </div> */}
                {/* <p className="text-[18px]  text-black mb-[10px]">Practice. Prepare. Perform.</p> */}
                    </div>
                   
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
                                        <h4><Link to="/event-details" className="!text-[22px]">{career.name}</Link></h4>
                                        <div className="flex  gap-[20px] mt-[10px] w-full">
                                        <div className="p-[30px] border rounded-[20px]" style={{
  boxShadow: '-5px -5px 8px #ffffff7a, 5px 5px 8px #a9a9aa7a'
}}>
                                            <p className="font-semibold text-[18px] text-black">Eligibility Criteria</p>
                                            <p><span className="font-semibold text-black">Degree Program: </span> {career.degreeProgram}</p>
                                           {career.preferred && <p><span className="font-semibold text-black">Preferred: </span> {career.preferred}</p>}
                                            <p><span className="font-semibold text-black">Certificate Program: </span> {career.certificateProgram}</p>
                                            <p><span className="font-semibold text-black">Course Outcome: </span> {career.outcome}</p>
                                            
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
                            
                        </div>
                        ))
                    } */}
                   
                   
                 
                </div>
                <div>
                    <p className="text-[25px] font-bold text-[#005BFF] mt-[60px] mb-[10px] ">Practice. Prepare. Perform.</p>
                    <p className="text-[15px] font-semibold text-black  mb-[10px]">Available Sample Papers:</p>
                    <ul className="list-disc pl-[40px]">
                        <li className="font-bold text-[18px] text-black mb-[5px]">Film & Production<span className="font-normal">– Download PDF</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]">Hair, Makeup & Prosthetics<span className="font-normal">– Download PDF</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]">Game Design & Development<span className="font-normal">– Download PDF</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]">Music & Sound Design<span className="font-normal">– Download PDF</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]">Digital Content Creation<span className="font-normal">– Download PDF</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]">PR, Journalism & Media Communication <span className="font-normal">– Download PDF</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]">Performing Arts & Media Management<span className="font-normal">– Download PDF</span></li>
                       


                    </ul>
                    <p className="text-[16px] text-black mt-[30px]">
                    Note: These are sample questions intended for practice. The actual entrance test may vary in structure and content.
</p>
                </div>

                <div>
                    <p className="text-[25px] font-bold text-black mt-[60px] mb-[20px] flex  gap-[10px]"><span className="text-[#de4141] fa fa-phone" aria-hidden="true"></span>Need Guidance?</p>
                 
                        <p className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">
                        If you need help selecting the right course or understanding the entrance process, our admissions counselors are here for you.
                            </span></p>
                            <ul className="list-disc pl-[40px]">
                        <li className="font-semibold text-[18px] text-black mb-[5px]">Email: <span className="font-normal">+91-959-4949-959</span></li>
                        <li className="font-semibold text-[18px] text-black mb-[5px]">Call/WhatsApp: <span className="font-normal">info@iicsindia.org</span></li>
                       


                    </ul>
                    <p className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">
                        Or <br />
                        Book Counselling Session
                            </span></p>
                    
                </div>
               

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

export default SamplePaperArea;