import React from "react";

const Goals = ({ goals }) => {
	return (
		<section className="project_skills">
			<div className="project_skills__wrapper project_wrapper--large">
				<div className="project_skills__content project_blurb">
					<h2
						data-aos="fade-up"
						data-aos-offset="100"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="false"
						data-aos-once="false"

						className="project_blurb__heading">The Goals</h2>
					{/* Check it out project transform-link */}
				</div>

				<p className="project_skills_visual">
					{goals.map((goal, key) => (
						<span

							data-aos="fade-up"
							data-aos-offset="100"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="false"
							data-aos-once="false"

							key={key}>
							●&emsp;{goal} <br />
						</span>
					))}
				</p>
			</div>
		</section>
	);
};

export default Goals;
