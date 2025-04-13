import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import CampusArea from "./CampusArea";


 

const Campus = () => {
	return (
		<>
		<Preloader />
			<HeaderOne />
			<BreadcrumbEvent title="Campus" subtitle="Campus" />
			<CampusArea />
    
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default Campus;
