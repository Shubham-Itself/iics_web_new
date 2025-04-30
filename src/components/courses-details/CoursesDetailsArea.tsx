import {  useEffect, useState } from "react";
import VideoPopup from "../../modals/VideoPopup";
import { Link } from "react-router-dom";
// import { title } from "framer-motion/client";

const AccordionItem = ({ title, content, isOpen, onClick }: any) => (
  <div className="border rounded-2xl shadow p-4 mb-[20px]">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center  text-left font-medium text-lg"
    >
      {title}
      <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
    </button>
    {isOpen && (
      <div  className="accordion-collapse "
      aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body !transition-all !duration-300 ease-in-out">
          <ul className="mt-[20px]">
           { content?.map((item:any)=>(
            <li>
                  <span className="flex gap-[20px] items-center">
                      <i className="fas fa-file-alt"></i>
                      {item}
                  </span>
                 
              </li>
           )) }
           
             
          </ul>
      </div>
  </div>
    )}
  </div>
);

const CoursesDetailsArea = ({
  // fees,
  courseInfo,
courseImg,
  mentor,
  duration,
  courseType,

  studentsSeat,
  industryMentors,
  courseCurricullam,
  mentorInfo,
  careerJob,
  careerEntrepreneurship,
  mentorIcon,
  eligibilityCriteria,
  titleCourse,
  registrationStart,
  registrationEnd,
  onlineEntranceExam,
  batchLaunchDate,
  mentorAbout,
  courseOverview,
  mentorTwoAbout,
  mentorTwoIcon,
  mentorTwoInfo,
  mentorTwoName
}: any) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [link , setLink] = useState('');

  const toggleItem = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const courseVideoTrim = 'https://res.cloudinary.com/dwgwz52rq/video/upload/v1744687414/events_xbzrld.mp4'
  const cleanedVideo = courseVideoTrim?.trim();
  console.log(cleanedVideo);
  useEffect(()=>{
    if(titleCourse == '3D Game Art'){
      setLink('https://res.cloudinary.com/dwgwz52rq/video/upload/v1745234851/gaming_rtkrc2.mp4')
    }else if(titleCourse == "Advance Gaming and Extended Reality (XR)"){
      setLink('https://res.cloudinary.com/dwgwz52rq/video/upload/v1745234851/gaming_rtkrc2.mp4')
    }
    else if(titleCourse == 'Sound Recording and Sound Design'){
      setLink('https://res.cloudinary.com/dwgwz52rq/video/upload/v1744688387/sound_school_ybuclq.mp4')
    }
    else if(titleCourse == 'Performing Arts and Media Management'){
      setLink('https://res.cloudinary.com/dwgwz52rq/video/upload/v1745401329/Performing_Arts_Media_Management_-_Amit_Sir_afw0lk.mp4')
    }
    else if(titleCourse == 'Hair, Makeup & Prosthetics'){
      setLink('https://res.cloudinary.com/dwgwz52rq/video/upload/v1745401327/School_of_Performing_Arts_Media_Management_-_Yasmin_Ma_am_gar8hq.mp4')
    }
    else if(titleCourse == 'Advance Gaming and Extended Reality (XR) Innovations'){
      setLink('https://res.cloudinary.com/dwgwz52rq/video/upload/v1745401330/School_of_Video_Games_Digital_Media_-_Anand_Sir_skoeok.mp4')
    }
  else if(titleCourse == 'Journalism, PR, Image Strategization & Brand Custodianship Program'){
    setLink('https://res.cloudinary.com/dwgwz52rq/video/upload/v1745477463/School_of_Creative_Communication_h80t7a.mp4')
  }
  else if(titleCourse == 'Digital Content Creation'){
    setLink('https://res.cloudinary.com/dwgwz52rq/video/upload/v1745477584/School_of_Digital_Design_Content_Creation_iraeid.mp4')
  }
    else{
      setLink('https://res.cloudinary.com/dwgwz52rq/video/upload/v1744687414/events_xbzrld.mp4')
    }

    // console.log(titleCourse);
  },[link , titleCourse])

  return (
    <>
      {/* video modal start */}
    <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}
      <section className="courses-details-section section-padding pt-0">
        <div className="container">
          <div className="courses-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="courses-details-items">
                  <div className="courses-image">
                  <video src={link} autoPlay muted loop playsInline></video>
                    {/* <a
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play"></i>
                    </a> */}
                  </div>
                  <div className="courses-details-content">
                    <ul className="nav !gap-0 !justify-between">
                    <li
                        className="nav-item wow fadeInUp "
                        data-wow-delay=".3s"
                      >
                        <a
                          href="#Course"
                          data-bs-toggle="tab"
                          className="nav-link active afterMobile"
                        >
                          Course Overview
                        </a>
                      </li>
                      <li
                        className="nav-item wow fadeInUp  "
                        data-wow-delay=".5s"
                      >
                        <a
                          href="#Curriculum"
                          data-bs-toggle="tab"
                          className="nav-link  afterMobile"
                        >
                          Curriculum
                        </a>
                      </li>
                     
                      <li
                        className="nav-item wow fadeInUp "
                        data-wow-delay=".5s"
                      >
                        <a
                          href="#Instructors"
                          data-bs-toggle="tab"
                          className="nav-link afterMobile"
                        >
                          Chief Mentor
                        </a>
                      </li>
                      <li
                        className="nav-item wow fadeInUp "
                        data-wow-delay=".5s"
                      >
                        <a
                          href="#Reviews"
                          data-bs-toggle="tab"
                          className="nav-link bb-none afterMobile"
                        >
                          Career Outcomes
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="Course" className="tab-pane fade active show  ">
                        <div className="description-content">
                        <p className="mb-3">
                          
                            {courseOverview}
                          </p>
                          <p className="mb-3 font-bold">
                            Eligibility Criteria:
                          
                                    <img src="/assets/img/small-line.png" alt="img" />
                         
                          </p>
                          <p className="mb-3">
                            <span className="font-semibold">Degree Program: </span>
                            {eligibilityCriteria[0]}
                          </p>
                          {
                            eligibilityCriteria[2] &&  <p className="mb-3">
                            <span className="font-semibold">Preferred: </span>
                            {eligibilityCriteria[2]}
                          </p>
                          }
                          <p className="mb-3">
                            <span className="font-semibold">Certificate Program: </span>
                            {eligibilityCriteria[1]}
                          </p>
                        </div>
                      </div>
                      <div id="Curriculum" className="tab-pane  fade">
                        {courseCurricullam?.map((item:any, index:any) => (
                          <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => toggleItem(index)}
                          />
                        ))}
                      </div>
                      <div id="Instructors" className="tab-pane fade">
                        <div className="instructors-items">
                          <h3>{titleCourse == "Journalism, PR, Image Strategization & Brand Custodianship Program"? 'Chief Mentors' : 'Chief Mentor'}</h3>
                          <div className="instructors-box-items !items-start">
                            <div className="thumb">
                              <img
                                src={mentorIcon}
                                alt="img"
                                className="w-[170px] h-[170px] object-cover"
                              />
                            </div>
                            <div className="content">
                              <h4>{mentor}</h4>
                              <span>{mentorInfo}</span> <br />
                              <span className="text-[12px]">{mentorAbout}</span>
                              {/* <p>
                                {mentorInfo}
                              </p> */}
                              <div className="social-icon">
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                </a>
                                {/* <a href="#">
                                  <i className="fab fa-dribbble"></i>
                                </a> */}
                                {/* <a href="#">
                                  <i className="fab fa-behance"></i>
                                </a> */}
                                <a href="#">
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          {
                            mentorTwoName && mentorTwoAbout && mentorTwoAbout &&  <div className="instructors-box-items !items-start">
                            <div className="thumb">
                              <img
                                src={mentorTwoIcon}
                                alt="img"
                                className="w-[170px] h-[170px] object-cover"
                              />
                            </div>
                            <div className="content">
                              <h4>{mentorTwoName}</h4>
                              <span>{mentorTwoInfo}</span> <br />
                              <span className="text-[12px]">{mentorTwoAbout}</span>
                              {/* <p>
                                {mentorInfo}
                              </p> */}
                              <div className="social-icon">
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                </a>
                                {/* <a href="#">
                                  <i className="fab fa-dribbble"></i>
                                </a> */}
                                {/* <a href="#">
                                  <i className="fab fa-behance"></i>
                                </a> */}
                                <a href="#">
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          }
                          {/* <div className="instructors-box-items style-2">
                            <div className="thumb">
                              <img
                                src="/assets/img/courses/instructors-2.png"
                                alt="img"
                              />
                            </div>
                            <div className="content">
                              <h4>Ryan M. Carmichael</h4>
                              <span>Product Designer</span>
                              <p>
                                UX/UI design courses offer a comprehensive
                                introduction to the world of user experience and
                                user interface design
                              </p>
                              <div className="social-icon">
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-dribbble"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-behance"></i>
                                </a>
                                <a href="#">
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div id="Reviews" className="tab-pane fade">
                        <div className="courses-reviews-items">
                          <div className="courses-reviews-box-items" style={{
  boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"
}}>
                            <div className="courses-reviews-box !gap-[20px]">
                              <div className="reviews-box !py-[30px] !px-[23px]">
                                <p className="font-bold !text-[18px] mb-[10px]">
                                  Career Outcomes (Jobs)
                                </p>
                                <p className="!text-[16px] !text-start">
                                  {careerJob}
                                </p>
                              </div>
                              <div className="courses-reviews-box !items-stretch !border-none !pb-0">
                                <div className="reviews-box !py-[30px] !px-[23px]">
                                  <p className="font-bold !text-[18px] mb-[10px]">
                                    Career Outcomes (Entrepreneurship)
                                  </p>
                                  <p className=" !text-[16px] !text-start">
                                    {careerEntrepreneurship}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="courses-sidebar-area sticky-style">
                  <div className="courses-items">
                    <div className="courses-image !mb-0">
                      <img src={courseImg} alt="img" />
                      {/* <h3 className="courses-title">Development</h3>
                                        <h4 className="topic-title">Web Development</h4> */}
                      <div className="arrow-items">
                        <div className="GlidingArrow">
                          <img src="/assets/img/courses/a1.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay1">
                          <img src="/assets/img/courses/a2.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay2">
                          <img src="/assets/img/courses/a3.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay3">
                          <img src="/assets/img/courses/a4.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay4">
                          <img src="/assets/img/courses/a5.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay5">
                          <img src="/assets/img/courses/a6.png" alt="img" />
                        </div>
                      </div>
                    </div>
                    <div className="courses-content ">
                      <h3 className="!text-[25px]">{titleCourse}</h3>
                      <p>{courseInfo}</p>
                      <div className="courses-btn">
                        <Link
                          to="/register"
                          className="theme-btn w-full flex justify-center items-center"
                        >
                          Register Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="courses-category-items">
                    <h5>Course Includes:</h5>
                    <ul>
                      {/* <li>
                        <span>
                          <i className="far fa-chalkboard-teacher"></i>
                          Chief Mentor
                        </span>
                        <span className="text">{mentor}</span>
                      </li> */}
                      {industryMentors && industryMentors.length > 0 && (
                        <li>
                          <span>
                          {
                            industryMentors.length >1 && <>
                            <i className="far fa-chalkboard-teacher"></i>
                            HOD <br />
                            </>
                          }
                            <i className="far fa-chalkboard-teacher"></i>
                            Industry Mentos
                          </span>
                          <div className="w-[40%] text-end">
                            {industryMentors?.map((mentor: any, index: any) => (
                              <span key={index} className="text ">
                                {mentor}
                              </span>
                            ))}
                          </div>
                        </li>
                      )}
                      <li>
                        <span>
                          <i className="far fa-user"></i>
                          Duration
                        </span>
                        <span className="text">
                          {duration?.match(/^\d+\s+Years?/)?.[0]}
                        </span>
                      </li>

                      <li>
                        <span>
                          <i className="far fa-user"></i>
                          Students
                        </span>
                        <span className="text">{studentsSeat}</span>
                      </li>
                      <li>
                        <span>
                        <i className="far fa-calendar-alt"></i>
                          Registration Start Date
                        </span>
                        <span className="text">{registrationStart}</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt"></i>
                          Registration End Date
                        </span>
                        <span className="text">{registrationEnd}</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt"></i>
                          Online Entrance Exam Date
                        </span>
                        <span className="text">{onlineEntranceExam}</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt"></i>
                          Batch Launch Date
                        </span>
                        <span className="text">{batchLaunchDate}</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-signal-alt"></i>
                          Skill Level
                        </span>
                        <span className="text">NSQF</span>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-medal"></i>
                          Course Type
                        </span>
                        <span className="text">{courseType}</span>
                      </li>
                    </ul>
                    {/* <Link to="/courses-details" className="share-btn"><i className="fas fa-share"></i> Share this courses</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesDetailsArea;
