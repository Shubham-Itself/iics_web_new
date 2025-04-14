import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import InternationalMentorsArea from "./InternationMentorsArea";


 

const InternationMentors = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
			<BreadcrumbEvent title="International Mentors at IICS" subtitle="International Mentors" />
      <InternationalMentorsArea/>     
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
      <ScrollTop />
    </>
  );
};

export default InternationMentors;