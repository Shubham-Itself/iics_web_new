import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import EligibilityCriteriaArea from "./EligibilityCriteriaArea";

 

const EligibilityCriteria = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
      <BreadcrumbEvent title="Eligibility Criteria" subtitle="Eligibility Criteria" />
     <EligibilityCriteriaArea/>
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default EligibilityCriteria;