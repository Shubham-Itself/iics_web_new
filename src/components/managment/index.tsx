import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import ManagementArea from "./ManagementArea";


 

const Management = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
			<BreadcrumbEvent title="Management at IICS" subtitle="Management" />
      <ManagementArea/>     
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
      <ScrollTop />
    </>
  );
};

export default Management;