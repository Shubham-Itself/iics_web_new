import { Link } from "react-router-dom";
import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";

import AboutHomeOne from "../homes/home/AboutHomeOne";

import FeatureHomeOne from "../homes/home/FeatureHomeOne";

import AboutArea from "./AboutArea";
import AboutCounter from "./AboutCounter";
import FeatureArea from "./FeatureArea";

 

const About = () => {
	return (
		<>
		<Preloader />
			<HeaderOne />
			<BreadcrumbEvent title="About" subtitle="About" />
			<AboutHomeOne/>
      <AboutArea />
	  <FeatureHomeOne/>
	  <AboutCounter />
      <FeatureArea />
      

      {/* <TeamHomeFive style_2={true} /> */}
      {/* <TestimonialHomeOne /> */}
			{/* <BrandsHomeOne /> */}
      {/* <NewsletterHomeOne /> */}
			{/* <MarqueeOne style_2={true} /> */}
			<div className="flex px-[200px] py-[20px] pb-[100px] justify-between">
			<div className="header-button ">
                    <Link
                      to="/register"
                      className="theme-btn yellow-btn !px-[16px] !py-[12px] "
                    >
                      Apply Now
                    </Link>
                  </div>
				  <div className="header-button ">
                    <Link
                      to="/register"
                      className="theme-btn yellow-btn !px-[16px] !py-[12px] "
                    >
                      Download Brochure
                    </Link>
                  </div>
				  <div className="header-button ">
                    <Link
                      to="/register"
                      className="theme-btn yellow-btn !px-[16px] !py-[12px] "
                    >
                     Book a Counselling Session
                    </Link>
                  </div>
			</div>
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default About;
