// import MarqueeOne from "../../../common/MarqueeOne";
// import Preloader from "../../../common/Preloader";
import { useRef } from "react";
import ScrollTop from "../../../common/ScrollTop";
import FooterOne from "../../../layouts/footers/FooterOne";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import ChooseHomeTwo from "../home-2/ChooseHomeTwo";
import CoursesHomeTwo from "../home-2/CoursesHomeTwo";
import HeroHomeTwo from "../home-2/HeroHomeTwo";
import TopCategoryHomeTwo from "../home-2/TopCategoryHomeTwo";
import InstagramHomeThree from "../home-3/InstagramHomeThree";

import BlogHomeOne from "./BlogHomeOne";
import BrandsHomeOne from "./BrandsHomeOne";
import ChooseHomeOne from "./ChooseHomeOne";

import HeroHomeOne from "./HeroHomeOne";

import PopularCoursesHomeOne from "./PopularCoursesHomeOne";
import ImportantCtaArea from "./ImportantCtaArea";






const HomeOne = () => {
	const coursesRef = useRef<HTMLDivElement | null>(null);

	// Scroll to CoursesHomeTwo when the button is clicked
	const handleScrollToCourses = () => {
	  if (coursesRef.current) {
		coursesRef.current.scrollIntoView({ behavior: 'smooth' });
	  }
	};

	return (
		<> 
		{/* <Preloader /> */}
			<HeaderOne />
      <HeroHomeOne  />
      {/* <FeatureHomeOne /> */}
      {/* <TopCategoryHomeOne /> */}
      {/* <AboutHomeOne /> */}
	  <ImportantCtaArea onSchoolButtonClick={handleScrollToCourses}/>
	  <HeroHomeTwo/>
	  <TopCategoryHomeTwo/>
	  <div ref={coursesRef}>
	  <PopularCoursesHomeOne />
	  </div>
			
			{/* <MarqueeOne /> */}
			<ChooseHomeOne />
			<InstagramHomeThree/>
			<ChooseHomeTwo/>
			{/* <TeamHomeOne /> */}
			{/* <NewsletterHomeOne /> */}
			{/* <TestimonialHomeOne /> */}
			<CoursesHomeTwo/>
		
			<BrandsHomeOne />
			<BlogHomeOne />
			{/* <MarqueeOne />  */}
			<FooterOne />  
			<ScrollTop />    
		</>
	);
};

export default HomeOne;
