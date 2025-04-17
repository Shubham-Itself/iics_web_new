import { Link } from "react-router-dom";

const BreadcrumbEvent = ({ title, subtitle }: any) => {
	return (
		<>
			<section
				className="breadcrumb-wrapper before:content-[''] before:!static relative"
				style={{
					backgroundImage: "url('/assets/iics_image/collage.webp')",
					backgroundPosition: 'center',
					backgroundAttachment:'fixed',
					// backgroundSize: 'cover',
				}}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black opacity-70 z-0" />

				{/* Shapes */}
				{/* <div className="shape-1 z-10">
					<img src="assets/img/breadcrumb/shape-1.png" alt="img" />
				</div>
				<div className="shape-2 z-10">
					<img src="assets/img/breadcrumb/shape-2.png" alt="img" />
				</div>
				<div className="shape-3 z-10">
					<img src="assets/img/breadcrumb/shape-3.png" alt="img" />
				</div>
				<div className="dot-shape z-10">
					<img src="assets/img/breadcrumb/dot-shape.png" alt="img" />
				</div>
				<div className="vector-shape z-10">
					<img src="assets/img/breadcrumb/Vector.png" alt="img" />
				</div> */}

				{/* Content */}
				<div className="container relative z-10">
					<div className="row">
						<div className="page-heading">
							
							<h1 className="normal-case">{title}</h1>
							<ul className="breadcrumb-items">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li className="style-2">{subtitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BreadcrumbEvent;