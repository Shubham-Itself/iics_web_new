import { Link, useLocation } from "react-router-dom";
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {  useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PopularCoursesHomeOne = () => {

    const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  useLayoutEffect(() => {
    let ctx: gsap.Context;
  
    const timeout = setTimeout(() => {
      ctx = gsap.context(() => {
        const container = containerRef.current;
        const scrollContent = scrollRef.current;
  
        if (!container || !scrollContent) return;
  
        // Force layout reflow
        scrollContent.offsetWidth;
  
        const sections = scrollContent.querySelectorAll('.cardGsapAnimation');
        const lastCard = scrollContent.querySelector('.cardGsapAnimation:last-child');
  
        const totalScrollDistance =
          scrollContent.scrollWidth - window.innerWidth + (lastCard?.clientWidth || 0);
  
        ScrollTrigger.matchMedia({
          "(min-width: 768px)": function () {
            gsap.to(sections, {
              x: -totalScrollDistance,
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: `+=${totalScrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
              },
            });
          }
        });
  
        ScrollTrigger.refresh();
      }, containerRef);
    }, 50);
  
    return () => {
      clearTimeout(timeout);
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
      gsap.killTweensOf('.cardGsapAnimation');
    };
  }, [location.pathname]);



    const coursesInformation = [
        {
             name:'Performing Arts and Media Management',
             mentorName:"Dr. (Hon) Amit Behl",
             mentorDesignation:"Award-Winning Film, Television, Theatre Actor, Professor of Media & Entertainment, Creative Producer & Senior Consultant",
             availableSeat:'20 Seats Available',
             batchStartDate:'15.05.2025',
             mentorIcon:'/assets/iics_image/leaders/amit_behl.webp',
             fees:"6 Lakh Per Annum",
             duration:'2 Years'
        },
        {
            name:'Hair, Makeup & Prosthetics',
            mentorName:"Ms. Yasmin Rodgers",
            mentorDesignation:"Celebrity Makeup & Prosthetics Artist",
            availableSeat:'15 Seats Available',
            batchStartDate:'15.05.2025',
            mentorIcon:'/assets/iics_image/leaders/yasmin_rodger.webp',
            fees:"6 Lakh Per Annum",
            duration:'1 Year'
       },
       {
        name:'Sound Recording & Sound Design',
        mentorName:"Padma Shri Dr. Resul Pookutty",
        mentorDesignation:"Academy Award Winner, Indian Sound Designer",
        availableSeat:'20 Seats Available',
        batchStartDate:'20.05.2025',
        mentorIcon:'/assets/iics_image/leaders/resul_pookutty.webp',
        fees:"6 Lakh Per Annum",
        duration:'2 Years'
   },
   {
    name:'3D Game Art',
    mentorName:"Mr. Manvendra Shukul",
    mentorDesignation:"CEO, Lakshya Digital",
    availableSeat:'25 Seats Available',
    batchStartDate:'15.05.2025',
     mentorIcon:'/assets/iics_image/leaders/manvendra_shukul.webp',
    fees:"6 Lakh Per Annum",
    duration:'2 Years'
},
{
    name:'Advance Gaming and Extended Reality (XR) Innovations',
    mentorName:"Mr. Anand Jha",
    mentorDesignation:"CEO, Nilee Games",
    availableSeat:'25 Seats Available',
    batchStartDate:'20.05.2025',
    mentorIcon:'/assets/iics_image/leaders/manvendra_shukul.webp',
    fees:"6 Lakh Per Annum",
    duration:'2 Years'
},
{
    name:'Journalism, PR, Image Strategization & Brand Custodianship',
    mentorName:"Dr. (Hon) Anusha Srinivasan Iyer",
    mentorDesignation:"Brand Custodian, Image Strategist, International Award- Winning Writer- Director, Firebrand Journalist, Egalitarian Activist",
    secondMentorName:'Dr. (Hon) S Ramachandran',
    secondMentorIcon:'assets/iics_image/leaders/ramachandran.webp',
    secondMentorDesignation:'Journalist, Filmmaker, Brand Strategist, Author, Theatrician',
    availableSeat:'20 Seats Available',
    batchStartDate:'20.05.2025',
    mentorIcon:'/assets/iics_image/leaders/anusha_srinivasan_iyer.webp',
    fees:"6 Lakh Per Annum",
    duration:'2 Years'
},
{
    name:'Events and Experiential Management Program',
    mentorName:"Ms. Sushma Gaikwad",
    mentorDesignation:"Co-founder Ice Global, Experiential Media and Director, Wizcraft MIME",
    availableSeat:'30 Seats Available',
    batchStartDate:'15.05.2025',
    mentorIcon:'assets/iics_image/leaders/sushma_gaikwad.webp',
    fees:"6 Lakh Per Annum",
    duration:'2 Years'
},
{
    name:'Digital Management and Content Creation',
    mentorName:"Ms. Ketki Pandit ",
    mentorDesignation:"Film Producer, Director, Storyteller, Founder- Youth Music",
    availableSeat:'20 Seats Available',
    batchStartDate:'15.05.2025',
    mentorIcon:'assets/iics_image/leaders/ketki_pandit.webp',
    fees:"6 Lakh Per Annum",
    duration:'2 Years'
},
    ]
    
  return (
    <>
       <section className=" popular-courses-section bg-white !pb-0 fix section-padding   !max-h-full !h-full"
       ref={containerRef}  
       >
            <div className="container !max-w-full"
            
             style={{
              position: 'relative',
              height: '100vh', // full viewport height
              overflow: 'hidden' // hide the native scrollbar to prevent regular scrolling
            }}
            >
                <div className="section-title-area align-items-end">
                    <div className="section-title px-[100px]">
                        <h6 className="wow fadeInUp">
                            Popular Coursessss
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3S">Our Unique Courses</h2>
                    </div>
                    {/* <ul className="nav">
                        <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                            <a href="#All" data-bs-toggle="tab" className="nav-link active">
                                All Courses 
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                            <a href="#Design" data-bs-toggle="tab" className="nav-link">
                                Design
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                            <a href="#Business" data-bs-toggle="tab" className="nav-link">
                                Business
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                            <a href="#Marketing" data-bs-toggle="tab" className="nav-link">
                                Marketing
                            </a>
                        </li>
                    </ul> */}
                </div>
                <div className="tab-content pl-[200px]">
                    <div id="All" className="tab-pane fade show active ">
                        <div className=""  ref={scrollRef}
        style={{
          display: 'flex',
          gap:'50px'
        }} >
                            {
                                coursesInformation.map((course , index)=>(
<div key={index} className=" !w-[25%] col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp cardGsapAnimation" data-wow-delay=".2s" >
                                <div className="courses-card-main-items h-full">
                                    <div className="courses-card-items !mt-0">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/01.jpg" alt="img" />
                                            {/* <h3 className="courses-title">{course.name}</h3>
                                            <h4 className="topic-title">Advance Web Design</h4> */}
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content !p-[10px]">
                                            {/* <ul className="post-cat">
                                                <li>
                                                    <Link to="/courses">Design</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul> */}
                                            <h5>
                                                <Link to="/courses-details">
                                                    {course.name}
                                                </Link>
                                            </h5>
                                            <div className="client-items !items-start !flex-col">
                                                <div className="flex !items-center gap-[20px]">
                                               <img src={course.mentorIcon} alt="" className="w-[25px] h-[25px] rounded-[50%] object-cover"  />
                                                <div>
                                                <p className="!text-[12px]">{course.mentorName}</p>
                                                {/* <p className="!text-[12px]">{course.mentorDesignation}</p> */}
                                                </div>
                                                </div>
                                               
                                                {
                                                    course.secondMentorName && course.secondMentorDesignation && <div className="flex !items-center gap-[20px]">
                                                    <img src={course.secondMentorIcon} alt="" className="w-[25px] min-w-[25px] h-[25px] rounded-[50%] object-cover"  />
                                                <div>
                                                <p className="!text-[12px]">{course.secondMentorName}</p>
                                                {/* <p className="!text-[12px]">{course.secondMentorDesignation}</p> */}
                                                </div>
                                                    </div>
                                                }
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    {course.availableSeat}
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    {course.batchStartDate}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover !mt-0">
                                        <div className="courses-content">
                                            {/* <ul className="post-cat">
                                                <li>
                                                    <Link to="/courses">Design</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul> */}
                                            <h5>
                                                <Link to="/courses-details">
                                                  {course.name}
                                                </Link>
                                            </h5>
                                            <h4 className="!text-[20px]">&#8377;{course.fees}</h4>
                                           
                                            <div className="client-items !mt-[0px] !pb-[5px]">
                                                <img src={course.mentorIcon} alt="" className="w-[25px] min-w-[25px] h-[25px] object-cover rounded-[50%]" />
                                                <div>
                                                <p>{course.mentorName}</p>
                                                <p className="text-[10px] leading-[20px]">{course.mentorDesignation}</p>
                                                </div>
                                            </div>
                                            {
                                                course.secondMentorName && course.secondMentorDesignation &&  <div className="client-items !mt-[0px] !pb-[5px]">
                                                <img src={course.secondMentorIcon} alt="" className="w-[25px] min-w-[25px] h-[25px] object-cover rounded-[50%]" />
                                                <div>
                                                <p>{course.secondMentorName}</p>
                                                <p className="text-[10px]">{course.secondMentorDesignation}</p>
                                                </div>
                                            </div>
                                            }
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    {course.duration}
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    {course.availableSeat}
                                                </li>
                                            </ul>
                                            <Link to="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                ))
                            }
                            



                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    </>
  );
};

export default PopularCoursesHomeOne;