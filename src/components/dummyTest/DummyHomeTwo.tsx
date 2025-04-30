
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

const DummyHomeTwo = () => {
    
    const coursesInformation = [
        {
             name:'Performing Arts and Media Management',
             mentorName:"Dr. (Hon) Amit Behl",
             mentorDesignation:"Award-Winning Film, Television, Theatre Actor, Professor of Media & Entertainment, Creative Producer & Senior Consultant",
             availableSeat:'20 Seats Available',
             batchStartDate:'15.05.2025',
             mentorIcon:'/assets/iics_image/leaders/amit_behl.webp',
             fees:"6 Lakh Per Annum",
             duration:'2 Years',
             courseImg:'assets/iics_course_image/performing-arts-media-management.webp'
        },
        {
            name:'Hair, Makeup & Prosthetics',
            mentorName:"Ms. Yasmin Rodgers",
            mentorDesignation:"Celebrity Makeup & Prosthetics Artist",
            availableSeat:'15 Seats Available',
            batchStartDate:'15.05.2025',
            mentorIcon:'/assets/iics_image/leaders/yasmin_rodgers.webp',
            fees:"6 Lakh Per Annum",
            duration:'1 Year',
                  courseImg:'assets/iics_course_image/hair-makeup-prosthetics.webp'
       },
       {
        name:'Sound Recording & Sound Design',
        mentorName:"Padma Shri Dr. Resul Pookutty",
        mentorDesignation:"Academy Award Winner, Indian Sound Designer",
        availableSeat:'20 Seats Available',
        batchStartDate:'20.05.2025',
        mentorIcon:'/assets/iics_image/leaders/rasul.webp',
        fees:"6 Lakh Per Annum",
        duration:'2 Years',
              courseImg:'assets/iics_course_image/sound-recording-sound-design.webp'
   },
   {
    name:'3D Game Art',
    mentorName:"Mr. Manvendra Shukul",
    mentorDesignation:"CEO, Lakshya Digital",
    availableSeat:'25 Seats Available',
    batchStartDate:'15.05.2025',
     mentorIcon:'/assets/iics_image/leaders/manvendar_shukul.webp',
    fees:"6 Lakh Per Annum",
    duration:'2 Years',
          courseImg:'assets/iics_course_image/3d-game-art.webp'
},
{
    name:'Advance Gaming and Extended Reality (XR) Innovations',
    mentorName:"Mr. Anand Jha",
    mentorDesignation:"CEO, Nilee Games",
    availableSeat:'25 Seats Available',
    batchStartDate:'20.05.2025',
    mentorIcon:'/assets/iics_image/leaders/anand_jha.webp',
    fees:"6 Lakh Per Annum",
    duration:'2 Years',
          courseImg:'assets/iics_course_image/advance-gaming-extended-reality-innovations.webp'
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
    mentorIcon:'/assets/iics_image/leaders/anusha.webp',
    fees:"6 Lakh Per Annum",
    duration:'2 Years',
          courseImg:'assets/iics_course_image/journalism-PR-Image-strategization-Brand-Custodianship.webp'
},
{
    name:'Events and Experiential Management Program',
    mentorName:"Ms. Sushma Gaikwad",
    mentorDesignation:"Co-founder Ice Global, Experiential Media and Director, Wizcraft MIME",
    availableSeat:'30 Seats Available',
    batchStartDate:'15.05.2025',
    mentorIcon:'assets/iics_image/leaders/susma.webp',
    fees:"6 Lakh Per Annum",
    duration:'2 Years',
          courseImg:'assets/iics_course_image/event-experiential-management-program.webp'
},
{
    name:'Digital Management and Content Creation',
    mentorName:"Ms. Ketki Pandit ",
    mentorDesignation:"Film Producer, Director, Storyteller, Founder- Youth Music",
    availableSeat:'20 Seats Available',
    batchStartDate:'15.05.2025',
    mentorIcon:'assets/iics_image/leaders/ketki_pandit.webp',
    fees:"6 Lakh Per Annum",
    duration:'2 Years',
          courseImg:'assets/iics_course_image/digital-management-content-creation.webp'
},
    ]
  return (
    <>
      <section className="live-courses-section section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                    Testimonials / Industry Speak
                    </h6>
                    {/* <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Unlock Knowledge in Real-Time <br />
                        Enroll in Our Live Courses
                    </h2> */}
                </div>
                <Swiper 
                spaceBetween={30}
                speed={1500}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".dot",
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                breakpoints={ {
                  1199: {
                      slidesPerView: 3,
                  },
                  991: {
                      slidesPerView: 2,
                  },
                  767: {
                      slidesPerView: 2,
                  },
                  575: {
                      slidesPerView: 1,
                  },
                  0: {
                      slidesPerView: 1,
                  },
              }}
                className="swiper live-courses-slider">
                   
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-1.jpg)`}}>
                                    <div className="live-courses-content">
                                        {/* <h3>
                                            <span>Ms. Deeksha Toor </span>
                                        
                                        </h3> */}
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/figma.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/01.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4>Ms. Deeksha Toor </h4>
                                   
                                    <p>Renowned Singer & Performer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                        {/* <h3>
                                            <span>Basic HTML</span>
                                            to WordPress
                                        </h3> */}
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-2.png)`}}></div>
                                    <h4>Mr. Keshav Sadhna</h4>
                                   <p>Indian Actor
                                   </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-3.jpg)`}}>
                                    <div className="live-courses-content">
                                       
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/fi.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/03.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-3.png)`}}></div>
                                    <h4>Ms. Radha Bhatt </h4>
                                   <p>Indian Actor & Trauma Informed Coach</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                      
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4>Mr. Dishu Khanna </h4>
                                    <p>Travel Digital Creator</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                      
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4>Mr. Kunal Ahlawat </h4>
                                    <p>Travel Digital Creator</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                      
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4>Ms. Shirin Sewani 
                                    </h4>
                                    <p>Indian Actor</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                      
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4>Mr. Siddhartha Sharma
                                    </h4>
                                    <p>Indian Actor</p>
                                </div>
                            </div>
                        </SwiperSlide>
                   
                    <div className="swiper-dot text-center pt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>

        <section className=" popular-courses-section bg-white mobile:!pt-[50px] !pb-0 fix section-padding    !max-h-full !h-full"
       
       >
            <div className="container !max-w-full"
            
            
            >
                <div className="section-title-area align-items-end">
                    <div className="section-title px-[100px]">
                        <h6 className="wow fadeInUp mobile:!text-[12px]">
                            Popular Courses
                        </h6>
                        <h2 className="wow fadeInUp mobile:!text-[20px]" data-wow-delay=".3S">Our Unique Courses</h2>
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
                
                <div className="tab-content pl-[20px] mobile:pl-0">
                    <div id="All" className="tab-pane fade show active ">
                        <div className="mobile:!gap-[10px] mobile:items-end"  
        style={{
          display: 'flex',
          gap:'10px',
          flexWrap:'wrap',
          justifyContent:'center'
        }} >
                          
                          <Swiper
 spaceBetween={30}
 speed={1500}
 loop={true}
 autoplay={{
   delay: 1500,
   disableOnInteraction: false,
 }}
 pagination={{
   el: ".dot",
   clickable: true,
 }}
 modules={[Pagination, Autoplay]}
 breakpoints={ {
   1199: {
       slidesPerView: 3,
   },
   991: {
       slidesPerView: 2,
   },
   767: {
       slidesPerView: 2,
   },
   575: {
       slidesPerView: 1,
   },
   0: {
       slidesPerView: 1,
   },
}}
 className="swiper live-courses-slider"

                          
                          
                          >
                {
                                coursesInformation.map((course , index)=>(
                                    <SwiperSlide key={index} className="swiper-slide">
<div  className=" !w-[335px] mobile:!w-full col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp  mobile:h-full" data-wow-delay=".2s" >
                                <div className="courses-card-main-items h-full mobile:w-[300px]">
                                    <div className="courses-card-items !mt-0 !opacity-100 !visible flex flex-col ">
                                        <div className="courses-image">
                                            <img src={course.courseImg} alt="img" />
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
                                       <div className="flex-1 flex flex-col">
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
                                            <h5 className="mobile:text-[16px]">
                                                <Link to="/courses-details">
                                                    {course.name}
                                                </Link>
                                            </h5>
                                            <div className="client-items !items-start !flex-col !border-none">
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
                                                <Link to="/courses-details" className="theme-btn yellow-btn mt-[10px] !py-[10px]">Enroll Now</Link>
                                            </div>
                                           
                                        </div>
                                        <ul className="post-class flex justify-between items-end p-[10px] flex-1">
  <li className="text-[14px] flex gap-[10px] items-baseline">
    <i className="far fa-books"></i>
    {course.availableSeat}
  </li>
  <li className="text-[14px] flex gap-[10px] items-baseline">
    <i className="far fa-user"></i>
    {course.batchStartDate}
  </li>
</ul>
                                       </div>
                                    </div>
                                    {/* <div className="courses-card-items-hover !mt-0">
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
                                    </div> */}
                                </div>
                            </div>
                                    </SwiperSlide>

                                ))
                            }
                            <div className="swiper-dot text-center pt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>      



                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    </>
  );
};

export default DummyHomeTwo;