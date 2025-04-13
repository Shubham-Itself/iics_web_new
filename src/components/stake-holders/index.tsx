import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import StakeHolderArea from "./StakeHolderArea";

// import ContactForm from "./ContactForm";
// import MapArea from "./MapArea";

 

const StakeHolder = () => {
	return (
		<>
		<Preloader />
			<HeaderOne />
			<BreadcrumbEvent title="StakeHolders" subtitle="Stakeholders" />
			<StakeHolderArea/>
      {/* <MapArea />
      <ContactForm /> */}
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default StakeHolder;
