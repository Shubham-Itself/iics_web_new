// import MarqueeOne from "../../../common/MarqueeOne";
// import Preloader from "../../../common/Preloader";
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






const HomeOne = () => {
	

	return (
		<> 
		{/* <Preloader /> */}
			<HeaderOne />
      <HeroHomeOne />
      {/* <FeatureHomeOne /> */}
      {/* <TopCategoryHomeOne /> */}
      {/* <AboutHomeOne /> */}
	  <HeroHomeTwo/>
	  <TopCategoryHomeTwo/>
			<PopularCoursesHomeOne />
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
