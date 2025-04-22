import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import ContactArea from "./ContactArea";
import ContactForm from "./ContactForm";


 

const Contact = () => {
	return (
		<>
		{/* <Preloader /> */}
			<HeaderOne />
			<BreadcrumbEvent title="Contact" subtitle="Contact" />
			<ContactArea />
      {/* <MapArea /> */}
      <ContactForm />
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default Contact;
