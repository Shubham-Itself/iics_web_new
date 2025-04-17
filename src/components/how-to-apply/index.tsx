import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import HowtoapplyArea from "./HowtoapplyArea";

 

const HowToApply = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
      <BreadcrumbEvent title="How To Apply" subtitle="Apply Now" />
      <HowtoapplyArea/>
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default HowToApply;