import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import ImportantDatesArea from "./ImportantDatesArea";

const ImportantDates = () => {
  return (
    <>
      {/* <Preloader /> */}
      <HeaderOne />
      <BreadcrumbEvent title="Important Dates" subtitle="Important Dates" />
      <ImportantDatesArea />
      {/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default ImportantDates;
