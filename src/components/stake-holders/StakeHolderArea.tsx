// import { path } from "framer-motion/client";

 
const StakeHolderArea = () => {
    const stakeHolders = [
        {
            name:'Ministry of Skill Development & Entrepreneurship',
            logo:'assets/iics_image/stakeholder/msde.webp',
            information:'MSDE is responsible for coordination of all Skill Development efforts across the country, removal of disconnect between demand and supply of skilled manpower, building the vocational and technical training framework, skill up-gradation, building of new skills and innovative thinking not only for existing jobs but also jobs that are to be created.',
            path:'https://www.msde.gov.in/'
        },
        {
            name:'Skill India Mission',
            logo:'assets/iics_image/stakeholder/skill_india_stakeholder.webp',
            information:'Launched in 2015, the Skill India Mission is a flagship initiative under MSDE aimed at training over 40 crore Indians in various industry-relevant skills by 2025. IICS is proud to contribute to this mission by creating high-impact learning experiences that turn raw talent into employable, entrepreneurial, and industry-ready professionals in the creative sector.',
                path:''
        },
        {
            name:'National Skill Development Corporation (NSDC)',
            logo:'assets/iics_image/stakeholder/nsdc_stakeholder.webp',
            information:'National Skill Development Corporation (NSDC) as the ‘Principal Architect of the Skill Ecosystem’, stands as India’s leading force in skilling, reskilling, and upskilling, driving transformative initiatives that unlock opportunities for the workforce of tomorrow. By providing funding support, concessional loans, and innovative financial solutions, NSDC empowers enterprises, start-ups, and organizations to make a meaningful impact in emerging and futuristic skill sectors and empower India’s workforce to compete Globally.',
                path:'https://nsdcindia.org/'
        },
        {
            name:'Media & Entertainment Skills Council (MESC)',
            logo:'assets/iics_image/stakeholder/mesc_stakeholder.webp',
            information:'The Media and Entertainment Skills Council (MESC), established in 2012, is a Not-for-Profit Organization under the Ministry of Skill Development and Entrepreneurship, dedicated to enhancing skill development in the Media and Entertainment sector. Initially funded by the National Skill Development Corporation (NSDC) and incubated at the Federation of Indian Chambers of Commerce and Industry (FICCI), MESC operates as an awarding body with the National Council for Vocational and Education Trainings (NCVET).',
                path:'https://www.mescindia.org/'
        },
    ]
  return (
    <>
      <section className="contact-section section-padding  fix">
            <div className="container !mx-0 !px-[20px] !max-w-full">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Our Stakeholders</h6>
                    <h2 className="wow fadeInUp !text-[18px] !font-normal " data-wow-delay=".3s">
                    Backed by India’s most trusted names in skilling and innovation.
                    </h2>
                </div>
                <div className="row gap-y-[20px]">
                    {
                        stakeHolders.map((stakeHolder , index)=>(
                            <div key={index} className=" col-xl-4 col-lg-6 col-md-6 wow fadeInUp !w-[50%]  " data-wow-delay=".3s">
                            <div className="contact-box-items !h-full rounded-[50px] bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                                <div className="icon">
                                    <img src={stakeHolder.logo} alt="stake holders" className="w-fit h-[100px] object-contain" />
                                </div>
                                <h5 className="text-[20px] text-black">
                                  <a href={stakeHolder.path || '#'} target="blank">{stakeHolder.name}</a>
                                </h5>
                                <div className="image">
                                    <img src="assets/img/small-line.png" alt="img" />
                                </div>
                                <h4 className="text-[14px] font-normal">
                                  {stakeHolder.information}
                                </h4>
                            </div>
                        </div>
                        ))
                    }
                   
                   
                   
                </div>
            </div>
        </section>
    </>
  );
};

export default StakeHolderArea;