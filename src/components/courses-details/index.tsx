import {  useParams } from "react-router-dom";
import BreadcrumbCoursesDetails from "../../common/breadcrumb/BreadcrumbCoursesDetails";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import CoursesDetailsArea from "./CoursesDetailsArea";

import { useEffect, useState } from "react";
import menu_data from "../../data/menu_data";

 

const CoursesDetails = () => {
  const { courseTitle } = useParams(); 
  const [courseData, setCourseData] = useState<any>(null);
  useEffect(() => {
    const getInnerMenuByTitle = (title: string) => {
      const innerMenus = menu_data
        .flatMap(item =>
          item.sub_menus?.flatMap(sub =>
            sub.inner_menu ? sub.inner_menus || [] : []
          ) || []
        );

      return innerMenus.find(inner => inner.title?.toLowerCase() === title.toLowerCase());
    };

    const course = getInnerMenuByTitle(courseTitle || '');
    setCourseData(course ?? null);
  }, [courseTitle]);

  if (!courseData) {
    return (
      <>
        <Preloader />
      </>
    );
  }

  const {title  , mentorName , duration , courseType , fees , courseInfo , studentsSeat , enrollmentDeadLine , courseStartDate , industryMentors , mentorIcon , courseCurricullam , mentorInfo , careerJob , careerEntrepreneurship , eligibilityCriteria} = courseData

  return (
    <>
    <Preloader />
    <HeaderOne />
    <BreadcrumbCoursesDetails titleCourse={title} mentor={mentorName} duration={duration} courseType={courseType} mentorIcon={mentorIcon}/>
    <CoursesDetailsArea fees={fees} courseInfo = {courseInfo} titleCourse={title} mentor={mentorName} duration={duration} courseType={courseType} studentsSeat={studentsSeat} enrollmentDeadLine = {enrollmentDeadLine} courseStartDate={courseStartDate} industryMentors = {industryMentors} courseCurricullam = {courseCurricullam} mentorInfo={mentorInfo} careerEntrepreneurship ={careerEntrepreneurship} careerJob={careerJob} mentorIcon={mentorIcon} eligibilityCriteria={eligibilityCriteria}/>
    {/* <RelatedCourses /> */}
    {/* <MarqueeOne style_2={true} /> */}
    <FooterOne /> 
    <ScrollTop />     
    </>
  );
};

export default CoursesDetails;