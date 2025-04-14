import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import SamplePaperArea from "./SamplePaperArea";

 

const SamplePaper = () => {
  return (
    <>
    <Preloader />
      <HeaderOne />
      <BreadcrumbEvent title="Sample Paper" subtitle="Sample Paper" />
     <SamplePaperArea/>
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default SamplePaper;