import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import ProspectusArea from "./ProspectusArea";

 

const Prospectus = () => {
  return (
    <>
    <Preloader />
      <HeaderOne />
      <BreadcrumbEvent title="Prospectus" subtitle="Prospectus" />
    <ProspectusArea/>
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Prospectus;