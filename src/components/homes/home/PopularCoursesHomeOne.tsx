import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const PopularCoursesHomeOne = () => {
    const [activeTab, setActiveTab] = useState("All");
  const coursesInformation = [
    {
      name: "Performing Arts and Media Management",
      mentorName: "Dr. (Hon) Amit Behl",
      mentorDesignation:
        "Award-Winning Film, Television, Theatre Actor, Professor of Media & Entertainment, Creative Producer & Senior Consultant",
      availableSeat: "20 Seats Available",
      batchStartDate: "15.05.2025",
      mentorIcon: "/assets/iics_image/leaders/amit_behl.webp",
      fees: "6 Lakh Per Annum",
      duration: "2 Years",
      courseImg:
        "assets/iics_course_image/performing-arts-media-management.webp",
    type:['Certificate' , 'Degree']
    },
    {
      name: "Hair, Makeup & Prosthetics",
      mentorName: "Ms. Yasmin Rodgers",
      mentorDesignation: "Celebrity Makeup & Prosthetics Artist",
      availableSeat: "15 Seats Available",
      batchStartDate: "15.05.2025",
      mentorIcon: "/assets/iics_image/leaders/yasmin_rodgers.webp",
      fees: "6 Lakh Per Annum",
      duration: "1 Year",
      courseImg: "assets/iics_course_image/hair-makeup-prosthetics.webp",
      type:['Certificate']
    },
    {
        name: "Sound Recording and Sound Design",
        mentorName: "Padma Shri Dr. Resul Pookutty",
        mentorDesignation: "Academy Award Winner, Indian Sound Designer",
        availableSeat: "20 Seats Available",
        batchStartDate: "20.05.2025",
        mentorIcon: "/assets/iics_image/leaders/rasul.webp",
        fees: "6 Lakh Per Annum",
        duration: "2 Years",
        courseImg: "assets/iics_course_image/sound-recording-sound-design.webp",
        type:['Certificate' , 'Degree']
      },
      {
        name: "3D Game Art",
        mentorName: "Mr. Manvendra Shukul",
        mentorDesignation: "CEO, Lakshya Digital",
        availableSeat: "25 Seats Available",
        batchStartDate: "15.05.2025",
        mentorIcon: "/assets/iics_image/leaders/manvendar_shukul.webp",
        fees: "6 Lakh Per Annum",
        duration: "2 Years",
        courseImg: "assets/iics_course_image/3d-game-art.webp",
        type:['Certificate' , 'Degree']
      },
      {
        name: "Advance Gaming and Extended Reality (XR) Innovations",
        mentorName: "Mr. Anand Jha",
        mentorDesignation: "CEO, Nilee Games",
        availableSeat: "25 Seats Available",
        batchStartDate: "20.05.2025",
        mentorIcon: "/assets/iics_image/leaders/anand_jha.webp",
        fees: "6 Lakh Per Annum",
        duration: "2 Years",
        courseImg:
          "assets/iics_course_image/advance-gaming-extended-reality-innovations.webp",
          type:['Certificate' , 'Degree']
      },
      {
        name: "Journalism, PR, Image Strategization & Brand Custodianship Program",
        mentorName: "Dr. (Hon) Anusha Srinivasan Iyer",
        mentorDesignation:
          "Brand Custodian, Image Strategist, International Award- Winning Writer- Director, Firebrand Journalist, Egalitarian Activist",
        secondMentorName: "Dr. (Hon) S Ramachandran",
        secondMentorIcon: "assets/iics_image/leaders/ramachandran.webp",
        secondMentorDesignation:
          "Journalist, Filmmaker, Brand Strategist, Author, Theatrician",
        availableSeat: "20 Seats Available",
        batchStartDate: "20.05.2025",
        mentorIcon: "/assets/iics_image/leaders/anusha.webp",
        fees: "6 Lakh Per Annum",
        duration: "2 Years",
        courseImg:
          "assets/iics_course_image/journalism-PR-Image-strategization-Brand-Custodianship.webp",
          type:['Certificate' , 'Degree']
      },
      {
        name: "Events And Experiential Media",
        mentorName: "Ms. Sushma Gaikwad",
        mentorDesignation:
          "Co-founder Ice Global, Experiential Media and Director, Wizcraft MIME",
        availableSeat: "30 Seats Available",
        batchStartDate: "15.05.2025",
        mentorIcon: "assets/iics_image/leaders/susma.webp",
        fees: "6 Lakh Per Annum",
        duration: "2 Years",
        courseImg:
          "assets/iics_course_image/event-experiential-management-program.webp",
          type:['Certificate' , 'Degree']
      },
      {
        name: "Digital Content Creation",
        mentorName: "Ms. Ketki Pandit ",
        mentorDesignation:
          "Film Producer, Director, Storyteller, Founder- Youth Music",
        availableSeat: "20 Seats Available",
        batchStartDate: "15.05.2025",
        mentorIcon: "assets/iics_image/leaders/ketki_pandit.webp",
        fees: "6 Lakh Per Annum",
        duration: "2 Years",
        courseImg:
        
          "assets/iics_course_image/digital-management-content-creation.webp",
          type:['Certificate' , 'Degree']
      },
  
  
  ];

  const getFilteredCourses = () => {
    if (activeTab === "All") {
      return coursesInformation;
    }
    return coursesInformation.filter((course) =>

       
      course.type.includes(activeTab)
   
    );
  };

  useEffect(()=>{
    // console.log(activeTab);
    // console.log(getFilteredCourses())
  },[activeTab])

  return (
    <>
      <section className=" popular-courses-section bg-white mobile:!pt-[50px] !pb-0 fix section-padding    !max-h-full !h-full">
        <div className="container !max-w-full">
          <div className="section-title-area align-items-end  mobile:!mb-[20px]">
            <div className="section-title px-[100px] mobile:px-[50px]">
              <h6 className="wow fadeInUp mobile:!text-[12px]">
                Popular Courses
              </h6>
              <h2
                className="wow fadeInUp mobile:!text-[20px]"
                data-wow-delay=".3S"
              >
                Our Unique Courses
              </h2>
            </div>
            <ul className="nav">
              <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                <a  data-bs-toggle="tab"
                  className={`nav-link mobile:!text-[14px] ${activeTab === "All" ? "active" : ""}`}
                  onClick={() => setActiveTab("All")}
                >
                  All Courses
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                <a  data-bs-toggle="tab" 
                  className={`nav-link mobile:!text-[14px] ${activeTab === "Certificate" ? "active" : ""}`}
                  onClick={() => setActiveTab("Certificate")}
                
                >
                  Certificate
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                <a  data-bs-toggle="tab" 
                 className={`nav-link mobile:!text-[14px] ${activeTab === "Degree" ? "active" : ""}`}
                 onClick={() => setActiveTab("Degree")}
                >
                  Degree
                </a>
              </li>
              {/* <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                            <a href="#Marketing" data-bs-toggle="tab" className="nav-link">
                                Marketing
                            </a>
                        </li> */}
            </ul>
          </div>
          <div className="tab-content pl-[20px] mobile:pl-0">
            <div  className="tab-pane fade show active ">
              <div
                className="mobile:!gap-[10px] mobile:items-end"
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
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
                  breakpoints={{
                    1199: {
                      slidesPerView: 4,
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
                  {getFilteredCourses().map((course, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div
                        className=" !w-[335px] mobile:!w-full col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp  mobile:h-full mobile:flex mobile:justify-center"
                        data-wow-delay=".2s"
                      >
                        <div className="courses-card-main-items h-full mobile:w-[300px]">
                          <div className="courses-card-items !mt-0 !opacity-100 !visible flex flex-col ">
                            <div className="courses-image">
                              <img src={course.courseImg} alt="img" />

                              <div className="arrow-items">
                                <div className="GlidingArrow">
                                  <img
                                    src="assets/img/courses/a1.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="GlidingArrow delay1">
                                  <img
                                    src="assets/img/courses/a2.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="GlidingArrow delay2">
                                  <img
                                    src="assets/img/courses/a3.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="GlidingArrow delay3">
                                  <img
                                    src="assets/img/courses/a4.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="GlidingArrow delay4">
                                  <img
                                    src="assets/img/courses/a5.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="GlidingArrow delay5">
                                  <img
                                    src="assets/img/courses/a6.png"
                                    alt="img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col">
                              <div className="courses-content !p-[10px]">
                                <h5 className="mobile:text-[16px] h-[39.2px] text-[16px] font-[500]">
                                  <Link to={`/courses-details/${encodeURIComponent(course.name?.toString() || '')}`}>
                                    {course.name}
                                  </Link>
                                </h5>
                                <div className="client-items !items-start !flex-col !border-none h-[55px]">
                                  <div className="flex !items-center gap-[20px]">
                                    <img
                                      src={course.mentorIcon}
                                      alt=""
                                      className="w-[25px] h-[25px] rounded-[50%] object-cover"
                                    />
                                    <div>
                                      <p className="!text-[12px]">
                                        {course.mentorName}
                                      </p>
                                    </div>
                                  </div>

                                  {course.secondMentorName &&
                                    course.secondMentorDesignation && (
                                      <div className="flex !items-center gap-[20px]">
                                        <img
                                          src={course.secondMentorIcon}
                                          alt=""
                                          className="w-[25px] min-w-[25px] h-[25px] rounded-[50%] object-cover"
                                        />
                                        <div>
                                          <p className="!text-[12px]">
                                            {course.secondMentorName}
                                          </p>
                                        </div>
                                      </div>
                                    )}
                               
                                </div>
                              </div>
                              <ul className="post-class flex justify-between items-end p-[10px] flex-1 mobile:flex-col mobile:justify-start mobile:items-start">
                                <li className="text-[14px] flex gap-[10px] items-baseline">
                                  <i className="far fa-books"></i>
                                  {course.availableSeat}
                                </li>
                                {/* <li className="text-[14px] flex gap-[10px] items-baseline">
                                  <i className="far fa-user"></i>
                                  {course.batchStartDate}
                                </li> */}
                                   <Link
                                    to="/register"
                                    className="theme-btn yellow-btn mt-[10px] !py-[10px]"
                                  >
                                    Enroll Now
                                  </Link>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
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

export default PopularCoursesHomeOne;
