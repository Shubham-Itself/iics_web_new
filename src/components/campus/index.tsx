import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
// import MarqueeFour from "../../common/MarqueeFour";
// import MarqueeOne from "../../common/MarqueeOne";
// import MarqueeThree from "../../common/MarqueeThree";
// import MarqueeTwo from "../../common/MarqueeTwo";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
// import DummyHomeTwo from "../dummyTest/DummyHomeTwo";
import CampusArea from "./CampusArea";


 

const Campus = () => {
	return (
		<>
		{/* <Preloader /> */}
			<HeaderOne />
			<BreadcrumbEvent title="Campus" subtitle="Campus" />
			<CampusArea />
    
			{/* <MarqueeOne style_2={true} /> */}
			{/* <MarqueeThree/> */}
			{/* <DummyHomeTwo/> */}
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default Campus;
