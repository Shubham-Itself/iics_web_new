import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import ChiefMentorsArea from "./ChiefMentorsArea";

 

const ChiefMentors = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
			<BreadcrumbEvent title="Chief Mentors at IICS" subtitle="Chief Mentors" />
      <ChiefMentorsArea/>       
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
      <ScrollTop />
    </>
  );
};

export default ChiefMentors;