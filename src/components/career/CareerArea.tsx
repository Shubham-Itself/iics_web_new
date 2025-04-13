import { Link } from "react-router-dom";


 

const CareerArea = () => {

  const careers = [
    {
       
        name:'1. Performing Arts & Media Management',
        jobOpportunity:'Actor, Theatre Artist, Media Manager, Casting Associate, Assistant Director, Talent Manager',
        entrepreneurship:'Founder of Theatre Group, Independent Creative Producer, Talent Management Agency Owner'
       

    },
    {
      
        name:'2. Hair, Makeup & Prosthetics',
         jobOpportunity:'Makeup Artist, Hair Stylist, Prosthetic Designer, Film/TV Stylist',
        entrepreneurship:'Freelance Makeup Studio, Beauty Brand Founder, Bridal & Film Makeup Studio'
     
        
    },
    {
        name:'3. Sound Recording & Sound Design',
       jobOpportunity:'Sound Designer, Sound Editor, Audio Engineer, Foley Artist, Mixing/Mastering Engineer',
        entrepreneurship:'Home Studio Business, Independent Sound Post-Production Services, Podcast & Music Production Studio Owner'
        
    },
    {
        name:'4. 3D Game Art',
       jobOpportunity:'3D Artist, Game Designer, Environment Artist, Character Modeler',
        entrepreneurship:'Indie Game Studio Founder, Freelance 3D Modeling Services, VR/AR Asset Design Services'
        
    },
    {
        name:'5. Advanced Gaming & XR Innovations',
       jobOpportunity:'Game Developer, XR Developer, Simulation Designer, AR/VR Project Coordinator',
        entrepreneurship:'XR Startup Founder, Metaverse Design Studio, Training Simulation Company Owner'
        
    },
    {
        name:'6. Journalism, PR, Image Strategization & Branding',
       jobOpportunity:'Journalist, PR Executive, Image Consultant, Brand Strategist, Content Editor',
        entrepreneurship:'Media Consulting Firm, PR Agency Founder, Branding & Digital Reputation Agency'
        
    },
    {
        name:'7. Events & Experiential Management',
       jobOpportunity:'Event Manager, Production Coordinator, Client Servicing Executive, Sponsorship Manager, Logistics Manager',
        entrepreneurship:'Founder of Event Management Company, Experiential Marketing Agency, Wedding & Corporate Event Planner'
        
    },
    {
        name:'8. Digital Management & Content Creation',
       jobOpportunity:'Digital Content Creator, Social Media Manager, Influencer Manager, Digital Marketer, Video Strategist',
        entrepreneurship:'Social Media Agency, YouTube Channel/Brand, Influencer Marketing Consultancy'
        
    },
  ]

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                  
                    <div className="my-[60px]">
                    <p className="text-[35px] font-bold text-black mb-[30px]">Career Pathways by Program</p>
                    <div className="section-title !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Here’s a glimpse of the exciting career opportunities across our programs:</h6>
                   
                </div>
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
                                        <h4><Link to="/event-details">{career.name}</Link></h4>
                                        <div className="flex  gap-[20px] mt-[40px] w-full">
                                        <div className="p-[30px] border rounded-[20px]" style={{
  boxShadow: '-5px -5px 8px #ffffff7a, 5px 5px 8px #a9a9aa7a'
}}>
                                            <p className="font-semibold text-[18px] text-black">Career Outcomes (Employment Opportunities)</p>
                                            <p>{career.jobOpportunity}</p>
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
                    }
                   
                   
                 
                </div>
                <div>
                    <p className="text-[35px] font-bold text-black mt-[60px] mb-[30px]">Why Careers at IICS Stand Out</p>
                    <ul className="list-disc pl-[40px]">
                        <li className="font-bold text-[18px] text-black mb-[5px]">Learn from Industry Icons: <span className="font-normal">Celebrity mentors and global experts shape your journey. </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]">Work on Live Projects: <span className="font-normal">Gain hands-on experience from Day 1. </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]">Global Curriculum: <span className="font-normal">Be ready for both Indian and international career opportunities.</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]">Entrepreneurial Focus: <span className="font-normal">Launch your own ventures in media, entertainment, or digital business.</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]">Industry Placements: <span className="font-normal">Strong tie-ups with top companies, studios, and media houses.</span></li>


                    </ul>
                </div>

                <div>
                    <p className="text-[35px] font-bold text-black mt-[60px] mb-[10px]">Placement Support & Opportunities</p>
                    <p className="text-[16px] text-black mb-[30px]">Our dedicated placement cell actively connects students with opportunities across:</p>
                    <ul className="list-disc pl-[40px]">
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Film & TV Production Houses </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"> <span className="font-normal">OTT Platforms</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Gaming Studios</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Media Agencies</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Event Firms</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Digital Brands</span></li>


                    </ul>

                    <p className="text-[16px] text-black mt-[30px]">We also guide and support students aiming to launch their own creative ventures</p>
                </div>
            </div>
        </section>
    </>
  );
};

export default CareerArea;