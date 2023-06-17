import React from "react";
import aboutVisual from "../assets/img/about-visual.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const About = () => {


	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});

	return (
		<section className="about">
			<div className="about__wrapper wrapper--small">
				<div
					data-aos="flip-left"


					className="about__content">
					<div className="about__content-blurb blurb blurb--framed">
						{/* “The most difficult thing is the decision to act, the rest is merely tenacity.” */}
						<h2
							data-aos="fade-up"
							data-aos-offset="100"
							data-aos-delay="50"
							data-aos-duration="1500"
							data-aos-easing="ease-in-out"
							data-aos-mirror="false"
							data-aos-once="false"

							className="blurb__heading">
							Engineers don't
							<br />
							just build things
						</h2>
						<p
							data-aos="fade-up"
							data-aos-offset="100"
							data-aos-delay="50"
							data-aos-duration="1500"
							data-aos-easing="ease-in-out"
							data-aos-mirror="false"
							data-aos-once="false"

							className="blurb__copy no-margin">
							they create solutions to the world's problems.
						</p>
					</div>
					<p
						data-aos="fade-up"
						data-aos-offset="100"
						data-aos-delay="50"
						data-aos-duration="1500"
						data-aos-easing="ease-in-out"
						data-aos-mirror="false"
						data-aos-once="false"

						className="about__content-signature">Yassine DEHHANI</p>
				</div>
				<img

					className="about__visual"
					src={aboutVisual}
					alt="Yassine DEHHANI"

				/>
			</div>
		</section>
	);
};

export default About;
