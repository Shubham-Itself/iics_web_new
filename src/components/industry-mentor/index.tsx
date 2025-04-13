import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import IndustryMentorsArea from "./IndustryMentorsArea";

 

const IndustryMentors = () => {
  return (
    <>
    <Preloader />
      <HeaderOne />
			<BreadcrumbEvent title="Industry Mentors at IICS" subtitle="Industry Mentors" />
      <IndustryMentorsArea/>       
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
      <ScrollTop />
    </>
  );
};

export default IndustryMentors;