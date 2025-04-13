import { Link } from "react-router-dom";
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PopularCoursesHomeOne = () => {

    const containerRef = useRef<any>(null);
    const scrollRef = useRef<any>(null);

    useEffect(() => {
        // Get the container element and all cards inside it
        const container = containerRef.current;
        const sections = gsap.utils.toArray('.card');
    
        // Calculate the total horizontal scroll distance
        const totalScrollDistance = scrollRef?.current?.scrollWidth - window.innerWidth;
    
        // Create the horizontal scroll animation
        gsap.to(sections, {
          x: -totalScrollDistance, // move left across the total scroll width
          ease: 'none',
          scrollTrigger: {
            trigger: container, // animation triggered when container comes into view
            start: 'top-=100 top', // start when container hits the top of viewport
            end: () => `+=${totalScrollDistance}`, // animation runs for the length of the scroll distance
            scrub: true, // smooth scrubbing for a real-time connection between scroll and animation
            pin: true,   // pin the container so that normal scrolling is disabled during the animation
            markers:true
          }
        });
        ScrollTrigger.refresh();
      }, []);

    const coursesInformation = [
        {
             name:'Performing Arts and Media Management',
             mentorName:"Dr. (Hon) Amit Behl",
             mentorDesignation:"Award-Winning Film, Television, Theatre Actor, Professor of Media & Entertainment, Creative Producer & Senior Consultant",
             availableSeat:'20 Seats Available',
             batchStartDate:'15.05.2025'
        },
        {
            name:'Hair, Makeup & Prosthetics',
            mentorName:"Ms. Yasmin Rodgers",
            mentorDesignation:"Celebrity Makeup & Prosthetics Artist",
            availableSeat:'15 Seats Available',
            batchStartDate:'15.05.2025'
       },
       {
        name:'Sound Recording & Sound Design',
        mentorName:"Padma Shri Dr. Resul Pookutty",
        mentorDesignation:"Academy Award Winner, Indian Sound Designer",
        availableSeat:'20 Seats Available',
        batchStartDate:'20.05.2025'
   },
   {
    name:'3D Game Art',
    mentorName:"Mr. Manvendra Shukul",
    mentorDesignation:"CEO, Lakshya Digital",
    availableSeat:'25 Seats Available',
    batchStartDate:'15.05.2025'
},
{
    name:'Advance Gaming and Extended Reality (XR) Innovations',
    mentorName:"Mr. Anand Jha",
    mentorDesignation:"CEO, Nilee Games",
    availableSeat:'25 Seats Available',
    batchStartDate:'20.05.2025'
},
{
    name:'Journalism, PR, Image Strategization & Brand Custodianship',
    mentorName:"Dr. (Hon) Anusha Srinivasan Iyer",
    mentorDesignation:"Brand Custodian, Image Strategist, International Award- Winning Writer- Director, Firebrand Journalist, Egalitarian Activist",
    secondMentorName:'Dr. (Hon) S Ramachandran',
    secondMentorDesignation:'Journalist, Filmmaker, Brand Strategist, Author, Theatrician',
    availableSeat:'20 Seats Available',
    batchStartDate:'20.05.2025'
},
{
    name:'Events and Experiential Management Program',
    mentorName:"Ms. Sushma Gaikwad",
    mentorDesignation:"Co-founder Ice Global, Experiential Media and Director, Wizcraft MIME",
    availableSeat:'30 Seats Available',
    batchStartDate:'15.05.2025'
},
{
    name:'Digital Management and Content Creation',
    mentorName:"Ms. Ketki Pandit ",
    mentorDesignation:"Film Producer, Director, Storyteller, Founder- Youth Music",
    availableSeat:'20 Seats Available',
    batchStartDate:'15.05.2025'
},
    ]
    
  return (
    <>
       <section className=" popular-courses-section fix section-padding section-bg"
      
       >
            <div className="container"
             ref={containerRef}  
             style={{
              position: 'relative',
              height: '100vh', // full viewport height
              overflow: 'hidden' // hide the native scrollbar to prevent regular scrolling
            }}
            >
                <div className="section-title-area align-items-end">
                    <div className="section-title">
                        <h6 className="wow fadeInUp">
                            Popular Coursessss
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3S">Our Unique Courses</h2>
                    </div>
                    <ul className="nav">
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
                    </ul>
                </div>
                <div className="tab-content">
                    <div id="All" className="tab-pane fade show active ">
                        <div className=""  ref={scrollRef}
        style={{
          display: 'flex'
        }} >
                            {
                                coursesInformation.map((course , index)=>(
<div key={index} className=" !w-[30%] col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp card" data-wow-delay=".2s" >
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
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
                                                <div className="client-img bg-cover !w-[25px]" style={{background: `url(assets/img/courses/client-1.png)`}}></div>
                                                <div>
                                                <p className="!text-[12px]">{course.mentorName}</p>
                                                {/* <p className="!text-[12px]">{course.mentorDesignation}</p> */}
                                                </div>
                                                </div>
                                               
                                                {
                                                    course.secondMentorName && course.secondMentorDesignation && <div className="flex !items-center gap-[20px]">
                                                        <div className="client-img bg-cover" style={{background: `url(assets/img/courses/client-1.png)`}}></div>
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
                                    <div className="courses-card-items-hover">
                                        <div className="courses-content">
                                            <ul className="post-cat">
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
                                            </ul>
                                            <h5>
                                                <Link to="/courses-details">
                                                    Learn With Advance Web
                                                    Design (UX/UI) Course
                                                </Link>
                                            </h5>
                                            <h4>$85</h4>
                                            <span>
                                                Education is only empowers
                                                people to pursue career
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    7h 40min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
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