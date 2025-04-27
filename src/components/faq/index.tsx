import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
// import MarqueeOne from "../../common/MarqueeOne";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import FaqArea from "./FaqArea";

 
const Faq = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
			<BreadcrumbEvent title="FAQ" subtitle="FAQ" />
			<FaqArea />       
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
      <ScrollTop />
    </>
  );
};

export default Faq;