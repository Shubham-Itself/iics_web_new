import { useState, useEffect } from "react";
import animationLoader from '../../public/assets/iics_image/loader-animation.json';
import Lottie from "lottie-react";

export default function Preloader() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<>
			{isVisible && (
				<div id="preloader" className="preloader">
					<div className="animation-preloader">
						<div className="edu-preloader-icon">
							{/* <img src="assets/img/preloader.gif" alt="" /> */}
						</div>
						<div className="w-64 h-64 mx-auto">
      <Lottie animationData={animationLoader} loop={true} />
    </div>

						{/* First Line: INDIAN INSTITUTE */}
						<div className="txt-loading">
							{"INDIAN INSTITUTE".split("").map((char, i) => (
								<span
									key={`line1-${i}`}
									data-text-preloader={char}
									className="letters-loading"
								>
									{char === " " ? "\u00A0" : char}
								</span>
							))}
						</div>

						{/* Second Line: OF CREATIVE SKILLS */}
						<div className="txt-loading mt-2">
							{"OF CREATIVE SKILLS".split("").map((char, i) => (
								<span
									key={`line2-${i}`}
									data-text-preloader={char}
									className="letters-loading"
								>
									{char === " " ? "\u00A0" : char}
								</span>
							))}
						</div>

						{/* <p className="text-center">Loading...</p> */}
						{/* <img src={animationLoader} alt="" /> */}
				
					</div>

					<div className="loader">
						<div className="row">
							<div className="col-3 loader-section section-left">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-left">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-right">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-right">
								<div className="bg"></div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}