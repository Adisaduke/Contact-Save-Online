import React from "react";

const Roadmap = ({ title, text, image }) => {
	return (
		<section className="project_cetifications project_wrapper--large">
			<div className="project_cetifications__wrapper project_wrapper--small">
				<div className="project_cetifications__content blurb">
					<h2
						data-aos="fade-up"
						data-aos-offset="100"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="false"
						data-aos-once="false"

						className="project_blurb__heading">{title}</h2>
					<p
						data-aos="fade-up"
						data-aos-offset="100"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="false"
						data-aos-once="false"

						className="project_blurb__copy project_blurb__copy--tight">
						{text}
					</p>
				</div>
			</div>
			<div className="project_cetifications_visual">
				<img
					src={image} alt="" />
			</div>
		</section>
	);
};

export default Roadmap;
