import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import PartnersArea from "./PartnersArea";



 

const Partners = () => {
	return (
		<>
		<Preloader />
			<HeaderOne />
			<BreadcrumbEvent title="Partners" subtitle="Partners
			" />
			<PartnersArea/>
    
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default Partners;
