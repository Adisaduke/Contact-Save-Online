import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import certImg from "../assets/img/certifications.png";

const Certification = () => {
	return (
		<section className="cetifications">
			<div className="cetifications__wrapper wrapper--small">
				<div
					data-aos="fade-up"
					data-aos-offset="100"
					data-aos-delay="50"
					data-aos-duration="1500"
					data-aos-easing="ease-in-out"
					data-aos-mirror="false"
					data-aos-once="false"

					className="cetifications_visual">
					<img src={certImg} alt="" />
				</div>
				<div className="cetifications__content blurb">
					<h2
						data-aos="fade-up"
						data-aos-offset="50"
						data-aos-delay="50"
						data-aos-duration="1900"
						data-aos-easing="ease-in-out"
						data-aos-mirror="false"
						data-aos-once="false"

						className="blurb__heading">
						My <br />
						Certifications
					</h2>
					<p
						data-aos="fade-up"
						data-aos-offset="50"
						data-aos-delay="50"
						data-aos-duration="1900"
						data-aos-easing="ease-in-out"
						data-aos-mirror="false"
						data-aos-once="false"

						className="blurb__copy blurb__copy--tight">
						Check out what I've accomplished (for now).
					</p>
					<a
						data-aos="fade-up"
						data-aos-offset="50"
						data-aos-delay="50"
						data-aos-duration="2500"
						data-aos-easing="ease-in-out"
						data-aos-mirror="false"
						data-aos-once="false"

						className="transform-link"
						href="https://www.credly.com/users/yassine-dehhani/badges"
						target="_blank"
						rel="noreferrer"
					>
						Verify on Credly
					</a>
				</div>
			</div>
		</section>
	);
};

export default Certification;
