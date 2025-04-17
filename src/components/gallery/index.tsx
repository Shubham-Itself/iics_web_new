import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import GalleryArea from "./GalleryArea";

 

const Gallery = () => {
	return (
		<>
		{/* <Preloader /> */}
			<HeaderOne />
			<BreadcrumbEvent title="Gallery" subtitle="Gallery" />
			<GalleryArea />
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default Gallery;
