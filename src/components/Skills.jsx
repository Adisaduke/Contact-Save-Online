import React from "react";
import skills1 from "../assets/img/skills1.png";
import programming1 from "../assets/img/programming1.png";
import softwares1 from "../assets/img/softwares1.png";
import environments1 from "../assets/img/environments1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

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
		<section id="portfolio" className="skills">
			<div className="skills__wrapper wrapper--large">
				<div

					data-aos="fade-up"
					data-aos-offset="100"
					data-aos-delay="50"
					data-aos-duration="1500"
					data-aos-easing="ease-in-out"
					data-aos-mirror="false"
					data-aos-once="false"

					className="skills__content blurb">
					<h2 className="blurb__heading">
						My <br />
						Skills
					</h2>
					<p className="blurb__copy blurb__copy--tight">
						Check out what I'm capable of.
					</p>
					{/* Check it out project transform-link */}
				</div>
				<div

					data-aos="fade-up"
					data-aos-offset="100"
					data-aos-delay="50"
					data-aos-duration="1500"
					data-aos-easing="ease-in-out"
					data-aos-mirror="false"
					data-aos-once="false"

					className="skills_visual for_desktop">
					<img src={skills1} alt="" />
				</div>
				<div className="for_mobile">
					<div

						className="skill_images_inner">
						<img
							data-aos="fade-up"
							data-aos-offset="100"
							data-aos-delay="50"
							data-aos-duration="1500"
							data-aos-easing="ease-in-out"
							data-aos-mirror="false"
							data-aos-once="false"

							src={programming1} alt="" />
						<img
							data-aos="fade-up"
							data-aos-offset="100"
							data-aos-delay="50"
							data-aos-duration="1900"
							data-aos-easing="ease-in-out"
							data-aos-mirror="false"
							data-aos-once="false"


							src={softwares1} alt="" />
						<img
							data-aos="fade-up"
							data-aos-offset="100"
							data-aos-delay="50"
							data-aos-duration="2000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="false"
							data-aos-once="false"


							src={environments1} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
