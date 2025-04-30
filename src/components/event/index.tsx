import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

// import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import EventGallery from "../eventGallery/EventGallery";
import EventLisrArea from "./EventLisrArea";

 

const Event = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
      <BreadcrumbEvent title="Events & Workshop" subtitle="Event & Workshop" />
      <EventLisrArea />
			{/* <MarqueeOne style_2={true} /> */}
      <EventGallery/>
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Event;