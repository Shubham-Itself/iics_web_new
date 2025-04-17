import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import PortfolioDevelopmentArea from "./PortfolioDevelopmentArea";

 

const PortfolioDevelopment = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
      <BreadcrumbEvent title="Portfolio Development" subtitle="Portfolio Development" />
      <PortfolioDevelopmentArea/>
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default PortfolioDevelopment;