import {  useParams } from "react-router-dom";
// import BreadcrumbInstructor from "../../common/breadcrumb/BreadcrumbInstructor";


import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";

import InstructorDetailsArea from "./InstructorDetailsArea";
import { useEffect, useState } from "react";
import { leadersDetails } from "../instructor/InstructorArea";
import { leadersDetails as chiefMentors } from "../chief-mentor/ChiefMentorsArea";
import { leadersDetails as industryMentors } from "../industry-mentor/IndustryMentorsArea";
import { leadersDetails as internationalMentors } from "../international-mentor/InternationMentorsArea";

 
const InstructorDetails = () => {
 
 

  const { title } = useParams(); 
  const [leaderData, setLeaderData] = useState<any>(null);
  useEffect(() => {
    const titleStr = title?.toLowerCase() || "";
  
    const findLeader = () => {
      const chief = chiefMentors.find(item => item?.leaderName?.toLowerCase() === titleStr);
      if (chief) return chief;
  
      const industry = industryMentors.find(item => item?.leaderName?.toLowerCase() === titleStr);
      if (industry) return industry;
  
      const international = internationalMentors.find(item => item?.leaderName?.toLowerCase() === titleStr);
      if (international) return international;
  
      const instructor = leadersDetails.find(item => item?.leaderName?.toLowerCase() === titleStr);
      if (instructor) return instructor;
  
      return null;
    };
  
    const result = findLeader();
    setLeaderData(result);
  }, [title]);

  if (!leaderData) {
    return (
      <>
        {/* <Preloader /> */}
      </>
    );
  }

    
  const {leaderName , leaderDesignation , instagramLink , linkedIn , facebookLink , image , mentorMessage} = leaderData;
 console.log(leaderData)
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
			{/* <BreadcrumbInstructor  breadCrumbName={mentorType} pathLink = {pathLink}/> */}
      <InstructorDetailsArea  leaderName={leaderName} leaderDesignation={leaderDesignation} instagramLink={instagramLink} linkedIn={linkedIn} facebookLink={facebookLink} image={image} mentorMessage={mentorMessage}/>       
      {/* <CoursesDetailsArea />        */}
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
      <ScrollTop />
    </>
  );
};

export default InstructorDetails;