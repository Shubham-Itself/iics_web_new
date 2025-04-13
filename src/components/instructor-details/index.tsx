import { useLocation } from "react-router-dom";
import BreadcrumbInstructor from "../../common/breadcrumb/BreadcrumbInstructor";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";

import InstructorDetailsArea from "./InstructorDetailsArea";


 
const InstructorDetails = () => {
  const location = useLocation();
  const {breadCrumbName , pathLink} = location.state || {}
 
  return (
    <>
    <Preloader />
      <HeaderOne />
			<BreadcrumbInstructor  breadCrumbName={breadCrumbName} pathLink = {pathLink}/>
      <InstructorDetailsArea />       
      {/* <CoursesDetailsArea />        */}
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
      <ScrollTop />
    </>
  );
};

export default InstructorDetails;