import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectModel from "./ProjectModel";
import Stars from "./Stars";

const ProjectIntro = ({ title, subtitle, img, scale, position, rotation }) => {
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
	});

	return (
		<header className="header overflowX">
			<div>
				<Stars />
			</div>
			<div className="project_introduction project_wrapper--large">
				<h1 className="project_introduction__content noselect">
					{/* <span class="introduction__content-el introduction__content-el--name">Yassine DEHHANI</span> */}
					<span
						data-aos="fade-right"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1500"
						data-aos-easing="ease-in-out"
						data-aos-mirror="false"
						data-aos-once="false"
						className="project_introduction__content-el project_introduction__content-el--description noselect"
					>
						{title}
					</span>
					<span
						data-aos="fade-left"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1500"
						data-aos-easing="ease-in-out"
						data-aos-mirror="false"
						data-aos-once="false"
						className="project_introduction__content-el project_introduction__content-el--job noselect"
					>
						{subtitle}
					</span>
				</h1>
				<div className="argo_visual">
					<ProjectModel
						model={img}
						scale={scale}
						position={position}
						rotation={rotation}
					/>
				</div>
				<svg
					className="project_introduction__arrow"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
					id="Layer_1"
					x="0"
					y="0"
					viewBox="0 0 130 65"
					// xml:space="preserve"
					enableBackground="new 0 0 130 65"
				>
					<g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)">
						<path d="M22.2 634c-50-35-40-47 293-349 174-157 323-285 333-285 24 0 635 552 647 585 8 23 6 30-14 46 -13 10-31 19-40 19s-57-37-107-83c-50-45-179-162-287-260l-197-179 -147 134c-319 289-433 388-446 388C50.2 650 34.2 643 22.2 634z" />
					</g>
				</svg>
			</div>
		</header>
	);
};

export default ProjectIntro;
