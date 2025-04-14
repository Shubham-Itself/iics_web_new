import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import PublicNotesArea from "./PublicNotesArea";


 

const PublicNotes = () => {
  return (
    <>
    <Preloader />
      <HeaderOne />
      <BreadcrumbEvent title="Public Notes" subtitle="Public Notes" />
      <PublicNotesArea/>
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default PublicNotes;