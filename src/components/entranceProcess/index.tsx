import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import EntranceProcessArea from "./EntranceProcessArea";

 

const EntranceProcess = () => {
  return (
    <>
    <Preloader />
      <HeaderOne />
      <BreadcrumbEvent title="Entrance Process" subtitle="Entrance Process" />
    <EntranceProcessArea/>
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default EntranceProcess;