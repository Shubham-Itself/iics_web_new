import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import SourceFundingIpCreationArea from "./SourceFundingIpCreationArea";

 

const SourceFundingIpCreation = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
      <BreadcrumbEvent title="Source Funding Ip Creation" subtitle="Source Funding Ip Creation" />
      <SourceFundingIpCreationArea/>
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default SourceFundingIpCreation;