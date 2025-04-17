import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import CareerArea from "./CareerArea";

 

const Career = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
      <BreadcrumbEvent title="Careers @ IICS" subtitle="Careers" />
      <CareerArea />
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Career;