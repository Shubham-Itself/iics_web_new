import {  useParams } from "react-router-dom";
import BreadcrumbCoursesDetails from "../../common/breadcrumb/BreadcrumbCoursesDetails";

// import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import CoursesDetailsArea from "./CoursesDetailsArea";

import { useEffect, useState } from "react";
import menu_data from "../../data/menu_data";
// import ImageGallery from "./ImageGallery";

 

const CoursesDetails = () => {
  const { courseTitle } = useParams(); 
  const [courseData, setCourseData] = useState<any>(null);
  useEffect(() => {
    const titleStr = courseTitle?.toLowerCase() || "";
  
    const findCourseData = () => {
      const innerMenus = menu_data?.flatMap(item =>
        item.sub_menus?.flatMap(sub =>
          sub.inner_menu ? sub.inner_menus || [] : []
        ) || []
      );
  
      const innerMatch = innerMenus.find(inner => inner.title?.toLowerCase() === titleStr);
      if (innerMatch) return innerMatch;
  
      const outerMenus = menu_data?.flatMap(item => item.sub_menus || []);
      const outerMatch = outerMenus.find(outer => outer?.title?.toLowerCase() === titleStr);
      if (outerMatch) return outerMatch;
  
      return null;
    };
  
    const result = findCourseData();
    setCourseData(result);
  }, [courseTitle]);

  if (!courseData) {
    return (
      <>
        {/* <Preloader /> */}
      </>
    );
  }

  

  const {title  , mentorName , duration , courseType , fees , courseInfo , studentsSeat , enrollmentDeadLine , courseStartDate , industryMentors , mentorIcon , courseCurricullam , mentorInfo , careerJob , careerEntrepreneurship , eligibilityCriteria  ,courseImg , courseVideo , registrationStart , registrationEnd , onlineEntranceExam , batchLaunchDate ,mentorAbout , courseOverview , mentorTwoName , mentorTwoAbout , mentorTwoIcon , mentorTwoInfo} = courseData 


  return (
    <>
    
    <HeaderOne />
    <BreadcrumbCoursesDetails titleCourse={title} mentor={mentorName} duration={duration} courseType={courseType} mentorIcon={mentorIcon} mentorTwoName={mentorTwoName} mentorTwoIcon={mentorTwoIcon}/>
  <CoursesDetailsArea fees={fees} courseInfo = {courseInfo} titleCourse={title} mentor={mentorName} duration={duration} courseType={courseType} studentsSeat={studentsSeat} enrollmentDeadLine = {enrollmentDeadLine} courseStartDate={courseStartDate} industryMentors = {industryMentors} courseCurricullam = {courseCurricullam} mentorInfo={mentorInfo} careerEntrepreneurship ={careerEntrepreneurship} careerJob={careerJob} mentorIcon={mentorIcon} eligibilityCriteria={eligibilityCriteria} courseImg={courseImg} courseVideo={courseVideo} registrationStart={registrationStart} registrationEnd={registrationEnd} onlineEntranceExam={onlineEntranceExam} batchLaunchDate={batchLaunchDate} mentorAbout={mentorAbout} courseOverview={courseOverview} mentorTwoName={mentorTwoName} mentorTwoIcon={mentorTwoIcon} mentorTwoAbout={mentorTwoAbout} mentorTwoInfo={mentorTwoInfo}/>
    {/* <RelatedCourses /> */}
    {/* <MarqueeOne style_2={true} /> */}
    {/* <ImageGallery imagesArr={imagesArr}/> */}
    <FooterOne /> 
    <ScrollTop />     
    </>
  );
};

export default CoursesDetails;